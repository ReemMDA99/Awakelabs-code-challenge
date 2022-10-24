// import react and hooks
import React, { useState, useEffect } from 'react';
// import forms and button from semantic-ui-react
import { Form, Button } from 'semantic-ui-react';
// import react form 
import { useForm } from "react-hook-form";
// import user services
import UserDataService from '../services/user.service';
// useNavigate hook returns a function that lets you navigate
// useParams returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> 
import { useNavigate, useParams } from "react-router-dom";

export default function AddUser() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const [serverError, setServerError] = useState('');
    const [newRecord, setNewRecord] = useState(true);
    
    const { id } = useParams();
    let navigate = useNavigate();
    
    
    // Reset form after a user record gets created
    useEffect(() => {
      reset({
        email: '',
        alias: '',
        location: ''
      })
    }, [isSubmitSuccessful]);

  // get and add user by id
    useEffect(() => {
      if (id) {
        setNewRecord(false);
        fetchAndPopulateUser(id);
      }
    }, []);
  // Response received from API using user id
    const fetchAndPopulateUser = (id) => {
      UserDataService.get(id)
        .then((response) => {
          console.log("Response received from API - ");
          console.log(response);
          if (response.data && response.data.length > 0) {
            const user = response.data[0];
            reset({
              email: user.email,
              alias: user.alias,
              location: user.location
            });
          }
        })
    }
  
    // Post the user form data to API
    const onSubmit = (data) => {
      if (newRecord) {
        createUser(data);
      } else {
        updateUser(data);
      }
  
    };
  // update user
    const updateUser = (data) => {
      UserDataService.update(id, data)
        .then((response) => {
          navigate('/users?user_save=true');
        })
        // if error catch error
        .catch((error) => {
          // If user creation is not successful, then show an error message
          setIsSubmitSuccessful(false);
        // if error log erro
          console.log(error);
          setServerError(error.response.data);
          setTimeout(function () {
            setServerError('');
          }, 3000)
          console.log("error occured");
        });
    };
    // create a new user
    const createUser = (data) => {
      UserDataService.create(data)
        .then((response) => {
          navigate('/users?user_save=true');
        })
        .catch((error) => {
          // If user creation is not successful, then show an error message
          setIsSubmitSuccessful(false);
          console.log(error);
          setServerError(error.response.data);
          setTimeout(function () {
            setServerError('');
          }, 3000)
          // if error log error
          console.log("error occured");
        });
    }
    return (
      <div>
        {/* if submitted successfully then print message */}
        {isSubmitSuccessful && <p className="text-success">User saved successfully!</p>}
        {/* if error print error  */}
        {serverError &&  <div class="ui red message">{serverError}</div>}
        {/* display form functionality */}
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/* form field for user email */}
            <Form.Field>
                <label>Email</label>
                <input
                    placeholder='Email'
                    type="email"
                        //  validate email registration
                    {...register("email",
                    {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                />
            </Form.Field>
            {/* if invalid email */}
            {errors.email && <div class="ui red message">Please check email</div>}
        
            {/* form field for user location */}

            <Form.Field>
                <label>Location</label>
                <input
                    placeholder='Location'
                    type="text"
                    {...register("location", { required: true })}
                />
            </Form.Field>
            {/* if no location */}
            {errors.location && <div class="ui red message">Location is required</div>}
        
            {/* form field for user location */}

            <Form.Field>
                <label>Alias</label>
                <input
                    placeholder='Alias'
                    type="text"
                    {...register("alias", { required: true, maxLength: 2 })}
                />
            </Form.Field>
            {/* if invalid alias */}
            {errors.alias &&  <div class="ui red message">Alias has to be 2 characters long</div>}
            {/* form submit button */}
          <Button type='submit'>Save</Button>
        </Form>
      </div>
    )
  }
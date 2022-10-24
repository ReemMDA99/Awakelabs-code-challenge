// import react components and hooks
import React, { useEffect, useState } from "react";
import UserDataService from "../services/user.service";
// import table button and confirm api from semnatic react UI
import { Table, Button, Confirm } from 'semantic-ui-react';
import { useNavigate, useSearchParams } from "react-router-dom";

// Create user-list functionality
function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasSuccessMessage, setSuccessMessage] = useState(false);
  const [hasDeleteMessage, setDeleteMessage] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [currentUserID, setCurrentUserID] = useState('');
  let navigate = useNavigate();

  // create save user functionality using use effect hooks
  useEffect(() => {
    retrieveUsers();
    if (searchParams.get('user_save')) {
      setSuccessMessage(true);
      setTimeout(function(){
        setSuccessMessage(false);
      }, 3000);
    }
  }, []);

// create a functionality to retrieve the user
  const retrieveUsers = () => {
    UserDataService.getAll()
      .then(response => {
        setUsers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // get user by email Id
  const getUserEmail = () => {
    if (!users || users.length === 0){
      return 'record';
    }
// find current user by id
    const currentUser = users.find((user) => currentUserID === user.id);

    return currentUser?.email;
  }

  const onDelete = (id) => {
    setCurrentUserID(id);
    setDisplayModal(true);
  };
// delete current user by id from users data
  const handleDeleteConfirm = () => {
    setDisplayModal(false);
    UserDataService.delete(currentUserID)
      .then(response => {
        setDeleteMessage(true);
        setTimeout(function(){
          setDeleteMessage(false);
        }, 3000);
        retrieveUsers();
      })
      .catch(e => {
        console.log(e);
      });
  }

  
  const handleDeleteCancel = () => {
    setDisplayModal(false);
  }
// get user confirmation before deleting the user
  const getConfirmMessage = () => {
    return (
      <div class="ui red message delete-modal">
        Are you sure you want to delete -   
         {getUserEmail()}
         ?
      </div>
    );
  }
// create confirm delete modal
  const ConfirmModal = () => {
    return (
    <Confirm
      open={displayModal}
      onCancel={handleDeleteCancel}
      onConfirm={handleDeleteConfirm}
      size='small'
      content={getConfirmMessage}
    />
    );
  }
// if user is saved successfully then notify the user by message
  const SuccessMessage = () => {
    if (!hasSuccessMessage) {
      return;
    }
    return (
      <div className="ui positive message">
        <div className="header">
          User saved successfully!
        </div>
      </div>
    );
  };
  // Notify the user is successfully deleted
  const DeleteMessage = () => {
    if (!hasDeleteMessage) {
      return;
    }
    return (
      <div className="ui negative message">
        <div className="header">
          User deleted successfully!
        </div>
      </div>
    );
  };

  return (
    <div className="list row">
      <div className="col-md-12">
         {/* import user list  */}
        <h4>Users List</h4>
        <SuccessMessage></SuccessMessage>
        <DeleteMessage></DeleteMessage>
        <ConfirmModal></ConfirmModal>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((user) => {
              return (
                <Table.Row key = {user.id}>
                  <Table.Cell>
                    <span className="circular labels">
                      <a className="ui label">{user.alias}</a>
                    </span>
                    {user.email}
                  </Table.Cell>
                  <Table.Cell>{user.location}</Table.Cell>
                  <Table.Cell>
                    <Button className="ui primary basic button" onClick={() => { navigate(`/users/${user.id}`) }}>Update</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button className="ui negative basic button" onClick={() => onDelete(user.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );

}
// export user list
export default UsersList;
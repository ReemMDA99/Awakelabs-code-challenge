// import database
const pool = require('../../db');
// import queries
const query = require('./queries');
var _ = require('underscore');

// create get users request and  respond to query    
const getUsers = (request, response) => {
    pool.query(query.getUsers, (error, results) => {
        // if error then throw error
        if (error) {
            throw error
        }
        // if response status is successful(ok) send back all the users from database
        response.status(200).json(results.rows)
    })
}

// create get user by Id request and respond to query  
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(query.getUserById, [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// create user request and respond to query  
const createUser = (request, response) => {
    const { location, alias, email } = request.body
    // check location validation
    if(_.isEmpty(location) || _.isEmpty(alias) || _.isEmpty(email)){
      return response.status(400).send('Missing required fields');
    }

    pool.query(query.getUserByEmail, [email], (error, results) => {
        if (results.rows.length > 0) {
            // add email validation
           response.status(400).send('User already exists');
        } else {
            pool.query(query.createUser, [location, alias, email], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send('User added successfully');
            })
        }
    })
    
}

// Edit user by Id request and respond to query  
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { location, alias, email } = request.body
// Update user location
    if(_.isEmpty(location) || _.isEmpty(alias) || _.isEmpty(email)){
        response.status(400).send('Missing required fields');
    }
// update user by id
    pool.query(
        query.updateUser,
        [location, alias, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

// delete user by Id request and respond to query  
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
// check if user with id exist to delete user
    pool.query(query.deleteUser, [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

// export getUsers, getUserById, createUser, updateUser and deleteUser
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
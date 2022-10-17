// create router object
// add routes
// export the routes
// import in server.js

//set up routes file

// use express
const { Router } = require('express');
// import controller 
const controller = require('./controller');
// create router and import all data from controllers
const router = Router();
// get all users
router.get('/', controller.getUsers);
// get user by id
router.get('/:id', controller.getUserById);
// create a new user
router.post('/', controller.createUser);
// update user by id
router.put('/:id', controller.updateUser);
// delete user by id
router.delete('/:id', controller.deleteUser)

// export routers
module.exports = router;
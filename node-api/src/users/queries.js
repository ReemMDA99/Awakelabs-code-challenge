// create all the user queries and export them  
// $1 $2 $3 are parameters
//
const getUsers = 'SELECT * FROM users ORDER BY id ASC';
const createUser = 'INSERT INTO users (location, alias, email) VALUES ($1, $2, $3)';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const getUserByEmail = 'SELECT * FROM users WHERE email = $1';
const updateUser = 'UPDATE users SET location = $1, alias = $2, email = $3 WHERE id = $4';
const deleteUser = 'DELETE FROM users WHERE id = $1';

module.exports = {
    getUsers, 
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail
    
}
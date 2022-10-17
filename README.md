# Awake Labs - code-challenge

To build a simple web application that links to a database and can perform basic CRUD operations.

## Technologies Used

- Frontend - React.js
- Backend - Node.js
- Database - Postgres
- Test - Insomnia

## REST API Users application

This is a REST API which lets us create, update, delete and read user records.
The API is mapped to a Users table in database.

The entire application is contained within the `server.js` file & `source` folders.

`db.js` is a local database connection config and is not to be used for production.

## Install

    npm install

## Run the app

    npm run serve

# REST API

The REST API to the users app is described below.


## GET - Get Users
GET localhost:3000/api/v1/users

###  Fetch all users

### Example Request
curl --location --request GET 'localhost:3000/api/v1/users'

## GET - Get User By ID
GET localhost:3000/api/v1/users/1

### Get a specific user by ID


### Example Request
curl --location --request GET 'localhost:3000/api/v1/users/1'

##  Delete User
DELETE - localhost:3000/api/v1/users/2
### Delete a User by ID

## Example Request
curl --location --request DELETE 'localhost:3000/api/v1/users/2'

## Update User
PUT - localhost:3000/api/v1/users/1

### Update a specific User

### Example Request

HEADERS
    Content-Type
    application/json

curl --location --request PUT 'localhost:3000/api/v1/users/1' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "id": 1,
        "location": "Bayview",
        "alias": "MM",
        "email": "maria@awesome.com"
    }'

## Create User
POST - localhost:3000/api/v1/users

### Create a User

### Example Request
HEADERS
    Content-Type
    application/json

curl --location --request PUT 'localhost:3000/api/v1/users/1' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "id": 1,
        "location": "Bayview",
        "alias": "MM",
        "email": "maria@awesome.com"
    }'


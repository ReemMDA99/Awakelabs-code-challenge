// create express server
const express = require('express');
// import customer/user routes
const userRoutes = require('./src/users/routes');
const bodyParser = require('body-parser');
var cors = require('cors')
// create app 
const app = express()
const db = require('./db');

// app listening on port #3001
const port = 3001

app.use(bodyParser.json())
app.use(cors()); //Note: Config just for development
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// connect to the port
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});

// add middleware to connect to the port to get or listen user info 
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
}); 

// use the route that leads to users path
app.use('/api/v1/users',userRoutes); 
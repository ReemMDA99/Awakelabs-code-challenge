// create express server
const express = require('express');
// import customer/user routes
const userRoutes = require('./src/users/routes');
const bodyParser = require('body-parser');
// create app 
const app = express()
const db = require('./db');

// app listening on port #3000
const port = 3000

app.use(bodyParser.json())
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
app.use('  ',userRoutes); 
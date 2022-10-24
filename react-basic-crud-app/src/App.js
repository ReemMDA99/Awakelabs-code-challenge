
// import routes and components
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import app.css and react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// import user component
import User from "./components/user.component";
// import user-list from user-list component
import UsersList from "./components/user-list.component";
// import add-user component
import AddUser from "./components/add-user.component";


class App extends Component {
  render() {
    return (
      <div>
        <header>
          {/* create navigation bar */}
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
              {/* Manage users */}
              <Link to={"/users"} className="navbar-brand">
                Manage Users
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                {/* Users List Button */}
                  <Link to={"/users"} className="nav-link">
                   <button className="ui button">
                      <i className="align justify icon"></i> 
                        Users List 
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Add Users button */}
                  <Link to={"/add-user"} className="nav-link">
                    <button className="ui button"><i className="plus icon"></i>  Add User </button>
                  </Link>
                </li>
              </div>
            </div>
          </nav>
        </header>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/users/:id" element={<AddUser />} />
          </Routes>
        </div>
      </div>
    );
  }
}
// export App modal
export default App;
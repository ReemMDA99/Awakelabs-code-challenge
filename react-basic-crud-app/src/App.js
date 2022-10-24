// import logo from './logo.svg';

// import routes and components
import './App.css';
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import users from user component
import User from "./components/user.component";
// import user-list from user-list component
import UsersList from "./components/users-list.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

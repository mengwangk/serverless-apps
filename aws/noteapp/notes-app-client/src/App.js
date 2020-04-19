import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect bg="light">
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item href="/signup">Signup</Nav.Item>
              <Nav.Item href="/login">Login</Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
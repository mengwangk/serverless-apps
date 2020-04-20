import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="/">Scratch</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link href="/signup">Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="/login">Login</Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
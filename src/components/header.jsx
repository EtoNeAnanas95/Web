import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/Web/">NotPineapple shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Web/">Home</Nav.Link>
            <Nav.Link href="/Web/Cart/">Сatalog</Nav.Link>
            <Nav.Link href="/Web/favourites/">Favourites</Nav.Link>
            <Nav.Link href="/Web/overlay/">Basket</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

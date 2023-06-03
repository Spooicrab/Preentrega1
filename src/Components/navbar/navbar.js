import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/navbar.css";
import Cart from "../cart/cart";

function NavPrueba() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="#top">Tienda Cajón</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#top">Inicio</Nav.Link>
          <Nav.Link href="#">Acerca de</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Cart />
    </Navbar>
  );
}

export default NavPrueba;

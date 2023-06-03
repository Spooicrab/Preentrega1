import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/navbar.css";
import Cart from "../cart/cart";

function NavPrueba() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="#home">Tienda Cajón</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Acerca de</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Cart />
    </Navbar>
  );
}

export default NavPrueba;

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.css";
import { Link } from "react-scroll";

export default function Navegation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">MKD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Quiénes somos</Nav.Link>
            <Nav.Link href="#pricing">
              <Link
                to="equipo"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Equipo
              </Link>
            </Nav.Link>
            <NavDropdown title="Tratamientos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link
                  to="tratamientos"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  Cédulas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to="implantes"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                Implantes
                </Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link
                  to="carillas"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                Carillas
                </Link>
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

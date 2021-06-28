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
            {/* <Nav.Link href="#pricing">
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
            </Nav.Link> */}
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link
                  to="tratamientos"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  Prótesis cementada
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
                Prótesis sobre implantes
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
                Ortodoncia
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
              <Link
                  to="other"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                Otros servicios
                </Link>
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">
              <Link
                to="contacto"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Contacto
              </Link>
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link eventKey={2} href="#memes">
            <Link
                  to="contacto"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
              Contacto
              </Link>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

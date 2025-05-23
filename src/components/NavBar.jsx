import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export const NavBar = () => (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">KARUNE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
          <Nav.Link to="/category/remeras/" as={NavLink} >Remeras</Nav.Link>
          <Nav.Link to="/category/pantalones/" as={NavLink} >Pantalones</Nav.Link>
          <Nav.Link to="/cart" as={NavLink} >Carrito</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

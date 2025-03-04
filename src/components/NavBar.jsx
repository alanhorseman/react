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
          <Nav.Link to="/" as={NavLink} ><span className="nav-link">Home</span></Nav.Link>
          <Nav.Link to="/category/remera/" as={NavLink} >Remeras</Nav.Link>
          <Nav.Link to="/category/pantalon/" as={NavLink} >Pantalon</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/count">Count</Nav.Link>
            <Nav.Link as={NavLink} to="/display">Display</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

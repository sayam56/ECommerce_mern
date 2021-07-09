import React from "react"
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap"
import { NavLink, Link } from 'react-router-dom'

/**
 * @author
 * @function Header
 */

const Header = (props) => {
return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Container>
     {/* <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand> */}
     <Link className="navbar-brand" to="/">Admin Dashboard</Link>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
     </Nav>
     <Nav>
          <li className="nav-item">
               <NavLink to="/signUp" className="nav-link">Sign Up</NavLink>
          </li>
          <li className="nav-item">
               <NavLink to="/signIn" className="nav-link">Sign In</NavLink>
          </li>
     </Nav>
     </Navbar.Collapse>
     </Container>
</Navbar>
);
};

export default Header;

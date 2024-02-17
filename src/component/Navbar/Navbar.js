import React from 'react'
import CartButton from '../Cart/CartButton'
import { Navbar ,Nav,Container} from 'react-bootstrap'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function NavbarHeader() {
  return (
    <div className="nav-header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="nav-ctn">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="#features" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
        </Container>
        <CartButton />
      </Navbar>
    </div>
  );
}

export default NavbarHeader
import React from 'react'
import { Navbar ,Nav,Container} from 'react-bootstrap'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import ProductContext from '../Store/ProductContext'
import { useContext } from 'react'

function NavbarHeader() {
    const ProductCtx = useContext(ProductContext);
    const { isUserLoggedIn, handleLogOut } = ProductCtx;
      

const handleUserLogOut=()=>{
 handleLogOut()

}

  return (
    <div className="nav-header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="nav-ctn">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            {!isUserLoggedIn ? (
              <NavLink to="/auth" className="nav-link">
                Login
              </NavLink>
            ) : (
              <NavLink to="/auth" className="nav-link" onClick={handleUserLogOut}>
                LogOut
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHeader
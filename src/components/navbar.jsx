import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
// import {item} from 'App'
import "./navbar.css";

export function NaviBar({count}) {
  
   

  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  className='brandname' href="#name">cart <span id='it'>It</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='topbar' href="#home"> 🏠 Home</Nav.Link>
            <Nav.Link  className='topbar' href="#about">About</Nav.Link>
            
            <NavDropdown title="shop" id="basic-nav-dropdown">
              <NavDropdown.Item className="custom-dropdown-item" href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                
              </NavDropdown.Item>
             
              
            </NavDropdown>
            <Button id='btn' variant="outline-primary"> cart🛒 ({count})</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


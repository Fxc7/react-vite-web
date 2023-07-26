import { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import profile from '../../config.profile.js';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const backgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }

  useEffect(() => {
    backgroundColor();
    window.addEventListener('scroll', backgroundColor);
  });

  return (
    <div>
      <Navbar expand="false" className={changeColor ? 'mb-3 navbar-color-active' : 'mb-3'}>
        <Container fluid>
          <Navbar.Brand href="/">
            <div className="d-flex align-items-center font-righteous fs-3 fw-bold">
              <img className="navbar-logo" src="/icon-navbar.png" />
              <span className="ms-2 animate__animated animate__bounceInDown">{profile.navbar_title}</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Offcanvas id="offcanvasNavbar-expand-false" aria-labelledby="offcanvasNavbarLabel-expand-false" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="font-righteous fs-3 fw-bold" id="offcanvasNavbarLabel-expand-false">
                  {profile.sidebar_title}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-danger">Search</Button>
                </Form>
                <Nav className="me-auto mx-auto text-center my-2 my-lg-0" navbarScroll>
                  {
                    profile.navLinks.map((element) => (
                      <div className="nav-link" key={element.id}>
                        <NavLink to={element.path} className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        } end>{element.text}</NavLink>
                      </div>
                    ))
                  }
                  <Button variant="outline-danger" className="btn-block rounded-1 font-righteous">Join With Us.</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent;
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="text-orange fw-bold fs-4">
            <img
              src="/naijaLogo.jpg"
              alt="NaijaGo Logo"
              className="img-fluid rounded"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.4)",
              }}
            />
          </Navbar.Brand>

          {/* Custom Control for Mobile */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
              <Nav.Link href="/policies" className="nav-link-custom">Policies</Nav.Link>
              <Nav.Link href="/privacy" className="nav-link-custom">Privacy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Small Floating Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-box animate__animated animate__fadeInDown">
          <button
            className="close-menu-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <Nav className="flex-column mt-2">
            <Nav.Link href="/" className="mobile-nav-link">Home</Nav.Link>
            <Nav.Link href="/about" className="mobile-nav-link">About</Nav.Link>
            <Nav.Link href="/contact" className="mobile-nav-link">Contact</Nav.Link>
            <Nav.Link href="/policies" className="mobile-nav-link">Policies</Nav.Link>
            <Nav.Link href="/privacy" className="mobile-nav-link">Privacy</Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;

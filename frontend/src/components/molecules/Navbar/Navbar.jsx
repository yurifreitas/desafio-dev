import React from 'react';
import { Container, Navbar, NavDropdown, Form, FormControl, Nav, Button, Offcanvas } from 'react-bootstrap';
const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-2" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Upload Arquivos</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/arquivos">Arquivos</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
   )
}
export default NavbarComponent
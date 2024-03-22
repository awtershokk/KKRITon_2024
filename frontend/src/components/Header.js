import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <div id="organizer_header">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="ms-3" href="#">Турниры ККРИТ</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-3">
                        <Nav.Link as={Link} to="/tournaments">Активные турниры</Nav.Link>
                        <Nav.Link href="#">Команды</Nav.Link>
                        <Nav.Link href="#">Мой профиль</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
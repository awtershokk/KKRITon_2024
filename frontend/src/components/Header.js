import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="organizer_header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Турниры ККРИТ</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mr-auto">
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

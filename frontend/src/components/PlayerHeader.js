import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const PlayerHeader = () => {
    return (
        <div id="player_header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Турниры ККРИТ</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Пока что</Nav.Link>
                        <Nav.Link href="#">Хз</Nav.Link>
                        <Nav.Link href="#">Че тут должно быть</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default PlayerHeader;

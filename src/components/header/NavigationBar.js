import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="md"> {/* Collapses on screens smaller than md (768px) */}
            <Container fluid>

                {/* This is the hamburger icon that appears when collapsed */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Content that collapses into the hamburger menu on smaller screens */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-3">
                        <Nav.Item>
                            <Link to="/" className="nav-link">Favorite Cities</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/AllCities" className="nav-link">All Cities</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/About" className="nav-link">About</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
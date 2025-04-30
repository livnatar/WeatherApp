import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

export default function NavigationBar() {
    return (
        <Navbar expand="lg" bg="white" className="py-3 border-bottom">
            <Container fluid className="px-4">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
                    <h1 className="h5 text-dark mb-0">
                        <i className="fa fa-book-reader me-2"></i>Weather App
                    </h1>
                </div>

                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse" className="ml-auto">
                    <Nav className="text-center ms-4">
                        <Nav.Link as={Link} to="/" className="text-dark mx-2">Favorite Cities</Nav.Link>
                        <Nav.Link as={Link} to="/AllCities" className="text-dark mx-2">All Cities</Nav.Link>
                        <Nav.Link as={Link} to="/About" className="text-dark mx-2">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}







// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../../imgs/logo.png';
//
//
// export default function NavigationBar() {
//     return (
//         <Navbar bg="light" expand="md"> {/* Collapses on screens smaller than md (768px) */}
//             <Container fluid>
//
//                 {/* This is the hamburger icon that appears when collapsed */}
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//
//                 {/* Content that collapses into the hamburger menu on smaller screens */}
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="mx-3">
//                         <Nav.Item>
//                             <Link to="/" className="nav-link">Favorite Cities</Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Link to="/AllCities" className="nav-link">All Cities</Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Link to="/About" className="nav-link">About</Link>
//                         </Nav.Item>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }
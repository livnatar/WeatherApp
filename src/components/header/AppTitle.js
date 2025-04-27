import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../imgs/logo.png';

export default function AppTitle() {
    return (
        <div className="bg-light-primary py-3">
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Col md={8} className="d-flex justify-content-center align-items-center text-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mr-3"
                            style={{width: '80px', height: '80px', marginRight: '15px'}}
                        />
                        <h1 style={{ color: '#6f4f1f' }}>Weather App</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
//<h1 className="text-white">Weather App</h1>

//
// <Row className="justify-content-center">
//     <Col md={8} className="text-center">
//         <h1 className="text-dark">Weather App</h1>
//     </Col>
// </Row>
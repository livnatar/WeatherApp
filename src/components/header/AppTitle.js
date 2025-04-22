
import { Container, Row, Col } from 'react-bootstrap';

export default function AppTitle() {
    return (
        <div className="bg-primary py-3">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <h1 className="text-white">Weather App</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
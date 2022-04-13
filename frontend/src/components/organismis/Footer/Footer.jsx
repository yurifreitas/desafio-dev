import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="">
            <Row className="justify-content-center">
                <Col className="text-center">1 of 3</Col>
                <Col className="text-center">2 of 3</Col>
                <Col className="text-center">3 of 3</Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">Todos os direitos reservados 2022</Col>
            </Row>
        </Container>
    )
}
export default Footer
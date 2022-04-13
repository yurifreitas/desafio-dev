import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="">
            <Row className="justify-content-center">
                <Col className="text-center"></Col>
                <Col className="text-center"></Col>
                <Col className="text-center"></Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">Todos os direitos reservados 2022</Col>
            </Row>
        </Container>
    )
}
export default Footer
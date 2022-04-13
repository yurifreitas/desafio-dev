import React from 'react';
import { Container, Con } from 'react-bootstrap';
import { Footer, Header } from '../components';
const TemplateDefault = ({ children }) => {

    return (
        <Container fluid>
            <Header />
            {children}
            <Footer />
        </Container>

    );
};

export default TemplateDefault;
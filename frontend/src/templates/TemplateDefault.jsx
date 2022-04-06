import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer, Header } from '../components';
const TemplateDefault = ({ children }) => {

    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>

    );
};

export default TemplateDefault;
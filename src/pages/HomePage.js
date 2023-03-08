import React from "react";
import { Container } from "react-bootstrap";
import './HomePage.css';

const HomePage = () => {
    return (
        <Container fluid className="HomePage px-0 d-flex">
            <div className="HomeMain">
                Home Main
            </div>
            <div className="HomeSide">
                Home Side
            </div>
        </Container>
    );
};

export default HomePage;
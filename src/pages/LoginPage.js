import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LoginImage from '../assets/images/Login-Image-Theme.svg';
import Logo from '../assets/images/LogoNew.svg';
import LoginModal from "../components/LoginModal";
import './LoginPage.css';

const LoginPage = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container fluid className="LoginPage">
            <Container fluid className="LoginMain">
                <Row className="gx-md-0 gy-4 gy-md-0">
                    <Col md={5} className="px-5 gy-2 my-auto">
                        <img src={Logo} alt="" width={275}/>
                        <p className="LoginContent my-3">
                            Sociolyfe helps you connect and share with the various people in your life.
                        </p>
                        <Button className="btn btn-success JoinButton" onClick={() => setModalShow(true)}>Join Now</Button>
                    </Col>
                    <Col md={7} className="pe-md-5">
                        <img src={LoginImage} alt="" className="LoginImage" />
                    </Col>
                </Row>
                <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
            </Container>
        </Container>
    );
};

export default LoginPage;
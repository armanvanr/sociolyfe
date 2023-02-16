import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import LogoIcon from '../assets/images/Logo-Icon.png';
import './LoginModal.css';

const LoginModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="LoginModal"
        >
            <div className="mx-auto my-2">
                <img src={LogoIcon} alt="" className="LogoIconLogin py-2" />
            </div>
            <span className="LoginModalHeader mx-4 my-2">Sign in to Sociolyfe</span>
            <Form className="gy-2">
                <Form.Group className="mx-4 my-2" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mx-4 my-2" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="name@example.com" />
                </Form.Group>
                <Button type="submit">Sign In</Button>
            </Form>
            {/* <Form className="gy-2">
                <Row>
                    <Form.Group as={Col} controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="password" placeholder="name@example.com" />
                </Form.Group>
            </Form> */}
        </Modal >
    );
};

export default LoginModal;
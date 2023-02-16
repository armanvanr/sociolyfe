import React, { useState } from "react";
import { Button, CloseButton, Col, Container, Form, Modal, Row, Stack } from "react-bootstrap";
import LogoIcon from '../assets/images/Logo-Icon.svg';
import './LoginModal.css';

const LoginModal = (props) => {
    const [canLogin, setCanLogin] = useState(true);

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="LoginModal"
        >
            <Container className="d-flex flex-column">
                <Stack direction="horizontal" className="mt-2">
                    <div direction="" className="mx-auto">
                        <img src={LogoIcon} alt="" className="LogoIconLogin py-2 ms-4" />
                    </div>
                    <div direction="" className="">
                        <CloseButton onClick={props.onHide} className="ms-auto my-auto me-2" />
                    </div>
                </Stack>

                {canLogin ?
                    (<>
                        <div className="d-flex align-self-center">
                            <span className="LoginModalHeader my-2">Log in to Sociolyfe</span>
                        </div>
                        <Form className="px-2 my-2">
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="name@example.com" />
                            </Form.Group>
                            <Button type="submit" className="">Log in</Button>
                        </Form>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <span className="SignUpText">New to Sociolyfe?</span>
                            <button type="button" class="btn btn-link p-1" onClick={() => setCanLogin(false)}>Register</button>
                        </div>
                    </>) :
                    (<>
                        <div className="d-flex align-self-center">
                            <span className="LoginModalHeader my-2">Create Sociolyfe Account</span>
                        </div>
                        <Form className="px-2 my-2">
                            <Row className="d-flex justify-content-space-between">
                                <Form.Group as={Col} className="mb-3" controlId="formGroupFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formGroupLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Button type="submit" className="">Register</Button>
                        </Form>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <span className="SignUpText">Already have an account?</span>
                            <button type="button" class="btn btn-link p-1" onClick={() => setCanLogin(true)}>Log in</button>
                        </div>
                    </>)
                }

            </Container>
        </Modal >
    );
};

export default LoginModal;
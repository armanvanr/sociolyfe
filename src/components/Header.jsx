import React from "react";
import './Header.css';
import { Container, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import Logo from '../assets/images/LogoNew.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faEnvelope, faGear, faHeart, faHouse, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import Tippy, { useSingleton } from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Avatar from "react-avatar";


const Header = () => {
    const [source, target] = useSingleton();
    return (
        <Navbar bg="secondary" className="d-flex justify-content-between text-center px-4">
            <Container fluid className="p-0 m-0">
                <Tippy singleton={source} arrow={false} className="TippyStyle" delay={0} />
                <div className="">
                    <img src={Logo} alt="" className="NavbarLogo" width={150} />
                    
                </div>
                {/* <Navbar.Toggle aria-controls="navbar-content" className="" /> */}
                {/* <Navbar.Collapse id="navbar-content" className="d-flex container-fluid flex-column flex-sm-row justify-content-sm-between"> */}
                <Nav className="col-auto d-flex justify-content-center">
                    <Tippy singleton={target} content={<span>Home</span>} >
                        <Nav.Link href="home" className="col-auto d-flex align-items-center">
                            <FontAwesomeIcon className="col-auto " icon={faHouse} id="NavbarIcon" />
                        </Nav.Link>
                    </Tippy>
                    <Tippy singleton={target} content={<span>Liked</span>} >
                        <Nav.Link href="liked" className="col-auto d-flex align-items-center">
                            <FontAwesomeIcon className="col-auto " icon={faHeart} id="NavbarIcon" />
                        </Nav.Link>
                    </Tippy>
                    <Tippy singleton={target} content={<span>Saved</span>} >
                        <Nav.Link href="saved" className="col-auto d-flex align-items-center">
                            <FontAwesomeIcon className="col-auto " icon={faBookmark} id="NavbarIcon" />
                        </Nav.Link>
                    </Tippy>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="mx-2"
                            aria-label="Search"
                        />
                    </Form>
                </Nav>
                <Nav className="col-auto d-flex justify-content-center align-items-center">
                    <Tippy singleton={target} content={<span>Notification</span>} >
                        <Nav.Link href="notif" className="col-auto d-flex align-items-center">
                            <FontAwesomeIcon icon={faBell} id="NavbarIcon" />
                        </Nav.Link>
                    </Tippy>
                    <Tippy singleton={target} content={<span>Messages</span>} >
                        <Nav.Link href="message" className="col-auto d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} id="NavbarIcon" />
                        </Nav.Link>
                    </Tippy>
                    <Dropdown className="col-auto d-flex align-items-center" align="end">
                        <Dropdown.Toggle variant="transparent" style={{border: "none"}}>
                            <Avatar name="Wim Baron" size="30" round="100px"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="">
                            <Dropdown.Item className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faUser} className="" id="NavbarIcon" />
                                <span>Switch Account</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faGear} className="" id="NavbarIcon" />
                                <span>Settings</span>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faRightFromBracket} className="" id="NavbarIcon" />
                                <span>Logout</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Nav.Link href="avatar" className="col-auto">
                    John Doe
                </Nav.Link> */}
                </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
};

export default Header;
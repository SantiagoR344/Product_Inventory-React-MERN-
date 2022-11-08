import React from "react";
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row } from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";




export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {};
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Bodeya <span id="usuario-sub-branm"></span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                <FontAwesomeIcon icon={faUser}/>

                                </Row>
                                <Row>
                                    #USUARIO#
                                </Row>

                            </Dropdown.Header>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./PageNav.module.css";

const PageNav = () => {

    return (
        <>
            <Navbar bg="light">
                <div className={classes.container}>
                    <Navbar.Brand>Data Place</Navbar.Brand>
                    <Nav>
                       
                        <LinkContainer to="/chart">
                        <Nav.Link>
                            Chart Builder
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                        <Nav.Link>
                            About
                        </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}

export default PageNav;
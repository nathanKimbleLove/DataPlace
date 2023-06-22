import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PageNav = () => {
    return (
        <>
            <Navbar bg="light">
                <Nav>
                    <LinkContainer to="/">
                    <Nav.Link>
                        Home
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/charts">
                    <Nav.Link>
                        Charts
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/data">
                    <Nav.Link>
                        Data Entry
                    </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </>
    )
}

export default PageNav;
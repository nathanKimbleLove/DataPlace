import React from "react";
import PageNav from "./PageNav";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

const PageWrapper = () => {
    return (
        <>
            <PageNav />
            <Container className="my-3 mx-3">
                <Outlet />
            </Container>
        </>
    )
}

export default PageWrapper;
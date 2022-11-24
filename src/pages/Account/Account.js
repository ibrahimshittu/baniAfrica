import React from "react";
import Header from "../../components/Account/Header";
import SideBar from "../../components/Account/SideBar";
import { Container, MainContents } from "./AccountStyles";

function Account() {
    return (
        <Container>
            <Header />
            <MainContents>
                <SideBar />
            </MainContents>
        </Container>
    );
}

export default Account;

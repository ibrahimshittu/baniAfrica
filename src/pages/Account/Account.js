import React from "react";
import CreateAccountRow from "../../components/Account/CreateAccountRow";
import Header from "../../components/Account/Header";
import SideBar from "../../components/Account/SideBar";
import { Container, DashboardDetails, MainContents } from "./AccountStyles";

function Account() {
    return (
        <Container>
            <Header />
            <MainContents>
                <SideBar />
                <DashboardDetails>
                    <CreateAccountRow />
                </DashboardDetails>
            </MainContents>
        </Container>
    );
}

export default Account;

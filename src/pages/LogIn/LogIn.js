import React from "react";
import LogInContainer from "../../components/LogIn/LogInContainer";
import { Container } from "./LogInStyles";
import svg from "../../assets/bani.svg";

function Login() {
    return (
        <Container>
            <img src={svg} alt="LogIn" />
            <LogInContainer />
        </Container>
    );
}

export default Login;

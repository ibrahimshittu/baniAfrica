import React, { useState } from "react";
import styled from "styled-components";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";

function LogInContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    return (
        <Container>
            <h4>Log in to your account</h4>
            <p>
                Don’t have an account? <span>Get Started</span>
            </p>
            <EmailAddress>
                <label>Email Address</label>
                <input
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </EmailAddress>
            <Password>
                <div className="labels">
                    <label>Password</label>
                    <span>Forgot Password?</span>
                </div>
                <div className="passwordInput">
                    <input
                        type={!showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <VisibilityOutlinedIcon
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                marginLeft: "-85px",
                                color: "#C1C1C1",
                                cursor: "pointer",
                                paddingRight: "10px",
                            }}
                        />
                    ) : (
                        <VisibilityOffOutlinedIcon
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                marginLeft: "-85px",
                                color: "#C1C1C1",
                                cursor: "pointer",
                                paddingRight: "10px",
                            }}
                        />
                    )}
                </div>
            </Password>
            <button
                disabled={
                    email.includes("@") === true &&
                    email.includes(".") === true &&
                    password.length > 5
                        ? false
                        : true
                }
                onClick={() => navigate("/account")}
            >
                Log In
            </button>
        </Container>
    );
}

export default LogInContainer;

const Container = styled.div`
    width: 30%;
    dispaly: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;

    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        margin: 0;
        margin-bottom: 2rem;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        margin: 0;

        span {
            color: #5444f2;
            margin-left: 5px;
        }
    }

    button {
        padding: 13px 32px;
        gap: 10px;
        width: 100%;
        height: 44px;
        color: #fff;
        font-weight: 700;
        background: #5444f2;
        border-radius: 8px;
        border: none;
        margin-top: 2rem;
        cursor: pointer;
    }

    button:disabled {
        padding: 13px 32px;
        gap: 10px;
        width: 100%;
        height: 44px;
        color: #fff;
        font-weight: 700;
        background: gray;
        border-radius: 8px;
        border: none;
        margin-top: 2rem;
        cursor: not-allowed;
    }
`;

const EmailAddress = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #65717c;
        margin-bottom: 12px;
    }

    input {
        height: 44px;
        padding: 13px 16px;
        border: 0.5px solid #e1e1e1;
        border-radius: 8px;
        box-sizing: border-box;
    }
`;

const Password = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .labels {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        label {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            display: flex;
            align-items: center;
            color: #65717c;
        }

        span {
            color: #5444f2;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            display: flex;
        }
    }

    .passwordInput {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        width: 100%;

        input {
            height: 44px;
            padding: 13px 16px;
            border: 0.5px solid #e1e1e1;
            border-radius: 8px;
            box-sizing: border-box;
            width: 100%;
        }
    }
`;

import React from "react";
import styled from "styled-components";
import svg from "../../assets/bani.svg";
import notif from "../../assets/notif.svg";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Header() {
    return (
        <Container>
            <img src={svg} alt="logo" />
            <RightSide>
                <img src={notif} alt="LogIn" />
                <ProfileDropdown>
                    <p className="initials">JT</p>
                    <div className="nameDetails">
                        <p>JT Industry Limit...</p>
                        <p>JamesT@gmail.com</p>
                    </div>
                    <ExpandMoreOutlinedIcon />
                </ProfileDropdown>
            </RightSide>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    width: 100%;
    height: 78px;
    flex-direction: row;
    background-color: #fff;
    padding: 0 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    img {
        height: 35%;
        width: auto;
    }
`;

const RightSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const ProfileDropdown = styled.div`
    background-color: #f5f6fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 54px;

    background: #f5f6fa;
    border-radius: 12px;
    padding: 0 1rem;
    margin-left: 1.3rem;

    .initials {
        background: #5444f2;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        border-radius: 50%;
        padding: 8px 7px;
        color: #fff;
        margin: 0;
        margin-right: 1rem;
    }

    .nameDetails {
        font-weight: 550;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: flex-start;
        text-align: left;
        flex-direction: column;
        color: #000000;
        margin-right: 1rem;

        p {
            margin: 0;
        }

        p:nth-child(2) {
            font-weight: 400;
            font-size: 12px;
            line-height: 12px;
            text-align: left;
            color: #65717c;
        }
    }
`;

import React from "react";
import styled from "styled-components";
import add from "../../assets/add.svg";
import square from "../../assets/format-square.svg";

function CreateAccountRow() {
    return (
        <Container>
            <h4>Virtual Account Dashboard</h4>
            <CreateButtons>
                <button>
                    <img src={square} alt="plus" />
                    Create New Branch
                </button>
                <button>
                    <img src={add} alt="plus" />
                    Create Virtual Account
                </button>
            </CreateButtons>
        </Container>
    );
}

export default CreateAccountRow;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 36px 24px;
    box-sizing: border-box;

    h4 {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        margin: 0;
    }
`;

const CreateButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    button:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 12px 16px;
        height: 44px;
        background: #ffffff;
        border: 1px solid #e1e1e1;
        border-radius: 8px;
        font-weight: 550;
        font-size: 16px;
        line-height: 16px;
        color: #65717c;

        img {
            margin-right: 1rem;
        }
    }

    button:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 12px 16px;
        height: 44px;
        color: #ffffff;
        border: 1px solid #e1e1e1;
        border-radius: 8px;
        font-weight: 550;
        font-size: 16px;
        line-height: 16px;
        background: #5444f2;
        border-radius: 8px;
        margin-left: 1rem;

        img {
            margin-right: 1rem;
        }
    }
`;

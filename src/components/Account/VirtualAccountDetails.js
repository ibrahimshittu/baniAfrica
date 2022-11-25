import React from "react";
import styled from "styled-components";

function VirtualAccountDetails() {
    return (
        <Container>
            <AccountDetails>
                <div className="totalCredits">
                    <p>Total Credits</p>
                    <h4>
                        NGN 3,287,902.<span>00</span>
                    </h4>
                </div>
                <div className="totalCredits">
                    <p>Total Transfer Settlememts</p>
                    <h4>81 Settlement</h4>
                </div>
                <div className="totalCredits">
                    <p>Generated Accounts</p>
                    <h4>12 Accounts</h4>
                </div>
            </AccountDetails>
        </Container>
    );
}

export default VirtualAccountDetails;

const Container = styled.div`
    width: calc(100% - 48px);
    height: 119px;
    margin: 0 24px;
    background: #ffffff;
    border: 0.5px solid #e1e1e1;
    border-radius: 8px;
`;

const AccountDetails = styled.div`
    width: 100%;
    padding: 31px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: auto;

    .totalCredits {
        width: 100%;
        p {
            margin: 0;
            margin-bottom: 12px;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #65717c;
        }

        h4 {
            margin: 0;
            font-weight: 550;
            font-size: 24px;
            line-height: 24px;
            color: #000000;

            span {
                font-weight: 400;
                font-size: 18px;
                line-height: 24px;
                color: #000000;
            }
        }
    }
`;

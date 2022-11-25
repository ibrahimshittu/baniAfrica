import React from "react";
import polarisBank from "../../assets/Providus.svg";
import arrowDown from "../../assets/arrow-down.svg";
import styled from "styled-components";

function AccountActivityFeed() {
    return (
        <Container>
            <Header>
                <h4>
                    Activity Feed <span>- GT Bank</span>
                </h4>
                <p>
                    <span>Active</span> • Created 16days ago
                </p>
            </Header>
            <BankDetails>
                <div className="bankColor"></div>
                <div className="bankNameandAccNumber">
                    <img src={polarisBank} alt="" />

                    <div className="goToAccountview">
                        <div className="bankName">
                            <p>Guaranty Trust Bank</p>
                            <p>0012345678</p>
                        </div>
                        <button>
                            Go to Account View
                            <img src={arrowDown} alt="" />
                        </button>
                    </div>
                </div>
            </BankDetails>
            {/* <Transactions>
                <InflowActivity>
                    <div>
                        <p>Total Inflow</p>
                        <p>NGN 100,000.00</p>
                    </div>
                </InflowActivity>
            </Transactions> */}
        </Container>
    );
}

export default AccountActivityFeed;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 16px 16px;
    box-sizing: border-box;

    h4 {
        font-weight: 550;
        font-size: 16px;
        line-height: 16px;
        color: #000000;
        margin: 0;

        span {
            color: #65717c;
        }
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.005em;
        margin: 0;
        color: #65717c;

        span {
            color: #02ba81;
        }
    }

    @media (max-width: 1600px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding: 16px 16px;
        box-sizing: border-box;

        h4 {
            font-weight: 550;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            margin: 0;
            margin-bottom: 11px;

            span {
                color: #65717c;
            }
        }
    }
`;

const BankDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;

    .bankColor {
        width: 100%;
        height: 45px;
        background-color: #ffede3;
    }

    .bankNameandAccNumber {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 0 16px;
        width: 100%;
        box-sizing: border-box;
        margin-top: -16px;

        .goToAccountview {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;

            .bankName {
                margin-top: 15px;
                p {
                    margin: 0;
                    font-weight: 550;
                    font-size: 16px;
                    line-height: 16px;
                    color: #000000;
                    margin-bottom: 11px;
                }

                p:nth-child(2) {
                    font-weight: 550;
                    font-size: 16px;
                    line-height: 16px;
                    color: #65717c;
                }
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                padding: 8px 12px;

                background: #ffffff;
                border: 1px solid #e1e1e1;
                border-radius: 8px;

                font-size: 16px;
                font-weight: 550;
                line-height: 18px;

                color: #000000;

                img {
                    margin-left: 11px;
                }
            }

            @media (max-width: 1600px) {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
            }
        }
    }
`;

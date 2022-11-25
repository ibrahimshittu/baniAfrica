import React from "react";
import polarisBank from "../../assets/Providus.svg";
import arrowDown from "../../assets/arrow-down.svg";
import styled from "styled-components";
import formatSquareBlue from "../../assets/bankSquarePurple.svg";
import arrowRight from "../../assets/arrow-right.svg";

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
            <Transactions>
                <InflowActivity>
                    <div className="inflowDetail">
                        <p>Total Inflow</p>
                        <p>₦77,823.00</p>
                    </div>
                    <div className="inflowDetail">
                        <p>Last Activity Date</p>
                        <p>13th Sept. 2022</p>
                    </div>
                    <div className="inflowDetail">
                        <p>Linked Branch</p>
                        <div className="location">
                            <img src={formatSquareBlue} alt="" />
                            <p>Dodo - Lekki II</p>
                        </div>
                    </div>
                </InflowActivity>
                <div className="detailsContainer">
                    <TableHeading>
                        <p>Transaction Details</p>
                        <p>Account Number</p>
                        <p>Total Inflow</p>
                    </TableHeading>
                    <UserDetails>
                        <div className="userName">
                            <p>Olaoluwa S.</p>
                        </div>
                        <div className="userName">
                            <p>₦6,720.00</p>
                        </div>
                        <div className="userName">
                            <p>Today, 8mins ago</p>
                        </div>
                        <div className="image">
                            <img src={arrowRight} alt="" />
                        </div>
                    </UserDetails>
                    <UserDetails>
                        <div className="userName">
                            <p>Olaoluwa S.</p>
                        </div>
                        <div className="userName">
                            <p>₦6,720.00</p>
                        </div>
                        <div className="userName">
                            <p>13th Aug - 3:15PM</p>
                        </div>
                        <div className="image">
                            <img src={arrowRight} alt="" />
                        </div>
                    </UserDetails>
                    <UserDetails>
                        <div className="userName">
                            <p>Olaoluwa S.</p>
                        </div>
                        <div className="userName">
                            <p>₦6,720.00</p>
                        </div>
                        <div className="userName">
                            <p>13th Aug - 3:15PM</p>
                        </div>
                        <div className="image">
                            <img src={arrowRight} alt="" />
                        </div>
                    </UserDetails>
                    <UserDetails>
                        <div className="userName">
                            <p>Olaoluwa S.</p>
                        </div>
                        <div className="userName">
                            <p>₦6,720.00</p>
                        </div>
                        <div className="userName">
                            <p>13th Aug - 3:15PM</p>
                        </div>
                        <div className="image">
                            <img src={arrowRight} alt="" />
                        </div>
                    </UserDetails>
                </div>
            </Transactions>
        </Container>
    );
}

export default AccountActivityFeed;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 210px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: -7px;
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

            /* @media (max-width: 1600px) {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
            } */
        }
    }
`;

const Transactions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 16px;
    margin-top: 16px;

    .detailsContainer {
        width: 100%;
        height: calc(100vh - 480px);
        overflow-x: scroll;
    }
`;

const InflowActivity = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    box-sizing: border-box;
    border-top: 0.5px solid #e1e1e1;
    border-bottom: 0.5px solid #e1e1e1;

    .inflowDetail {
        width: 100%;
        p {
            font-weight: 400;
            font-size: 12px;
            line-height: 140%;
            letter-spacing: 0.005em;

            color: #65717c;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p:nth-child(2) {
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .location {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            padding: 4px 6px;
            border-radius: 4px;

            img {
                background: ${(props) => props.backgroundColor};
                padding: 2px 6px;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                border-top-right-radius: none;
                border-bottom-right-radius: none;
            }

            p {
                margin: 0;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                color: ${(props) => props.color};
                padding: 2px 6px;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                border-top-left-radius: none;
                border-bottom-left-radius: none;
                background: ${(props) => props.backgroundColor};
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
`;

const TableHeading = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #fff;

    p:nth-child(1) {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #65717c;
        width: 100%;
        text-align: left;
        margin: 0;
        margin-top: 16px;
        min-width: 10rem;
    }

    p:nth-child(2) {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #65717c;
        width: 100%;
        text-align: left;
        margin: 0;
        margin-top: 16px;
        min-width: 10rem;
    }

    p:nth-child(3) {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #65717c;
        width: 100%;
        text-align: left;
        margin: 0;
        margin-top: 16px;
        min-width: 12rem;
    }
`;

const UserDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 0.5px solid rgba(225, 225, 225, 0.8);
    cursor: pointer;

    .userName {
        width: 100%;

        p {
            min-width: 10rem;
            margin: 10px 0;
        }

        img {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }
    }

    .image {
        width: 100%;
        min-width: 6rem;

        img {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }
    }

    &:hover {
        background: rgba(245, 246, 250, 0.7);
        width: calc(100% + 10rem);
    }

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

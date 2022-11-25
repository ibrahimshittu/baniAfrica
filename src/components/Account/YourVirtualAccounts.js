import React from "react";
import styled from "styled-components";
import grid from "../../assets/grid.svg";
import row from "../../assets/row.svg";
import search from "../../assets/search.svg";
import settingII from "../../assets/settingII.svg";
import copy from "../../assets/copy.svg";
import more from "../../assets/more.svg";

function YourVirtualAccounts({ banks }) {
    return (
        <Container>
            <div className="HeaderContainer">
                <Header>
                    <p>Your Virtual Accounts</p>
                    <div className="rightSide">
                        <img src={row} alt="grid" />
                        <img src={grid} alt="row" />
                    </div>
                </Header>
                <SearchBar>
                    <p>Branch</p>
                    <div className="searchInput">
                        <input type="text" placeholder="Search for virtual account" />
                        <img src={search} alt="search" />
                    </div>
                </SearchBar>
                <Title>
                    <p>Lekki II</p>
                    <div className="ManageAccount">
                        <p>Manage</p>
                        <img src={settingII} alt="" />
                    </div>
                </Title>
                <TableHeading>
                    <p>Bank Name</p>
                    <p>Account Number</p>
                    <p>Total Inflow</p>
                </TableHeading>
                <div className="BankDetailsContainer">
                    {banks.map((bank, index) => {
                        return (
                            <BankDetails
                                key={index}
                                color={bank.color}
                                backgroundColor={bank.backgroundColor}
                            >
                                <div className="bankLogo">
                                    <img src={bank.image} alt="" />
                                </div>
                                <div className="bankName">
                                    <p>{bank.bankName}</p>
                                </div>
                                <div className="accountNumber">
                                    <p>{bank.accountNumber}</p>
                                    <img src={copy} alt="" />
                                </div>
                                <div className="locationDetails">
                                    <div className="location">
                                        <img src={bank.square} alt="" />
                                        <p>{bank.location}</p>
                                    </div>
                                </div>
                                <div className="totalInFlow">
                                    <p>{bank.totalInflow}</p>
                                </div>
                                <div className="more">
                                    <img src={more} alt="" />
                                </div>
                            </BankDetails>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
}

export default YourVirtualAccounts;

const Container = styled.div`
    width: calc(100% - 48px);
    height: calc(100vh - 346.5px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: #fff;
    margin-top: 16px;
    border-radius: 8px;

    .HeaderContainer {
        width: 100%;
        padding-left: 29px;
        box-sizing: border-box;
    }

    .BankDetailsContainer {
        width: calc(100% + 29px);
        overflow-y: auto;
        height: calc(100vh - 624.5px);
        margin-left: -29px;
        box-sizing: border-box;
    }
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    padding: 30px 29px 9px 0;
    box-sizing: border-box;
    border: 0.5px solid #e1e1e1;
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 8px;

    p {
        font-weight: 550;
        font-size: 16px;
        line-height: 16px;
        color: #000000;
    }

    .rightSide {
        img {
            margin-left: 16px;
        }
    }
`;

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    padding: 11px 29px 9px 0;
    box-sizing: border-box;
    border: 0.5px solid #e1e1e1;
    border-left: none;
    border-right: none;
    border-top: none;

    p {
        color: #5444f2;
        font-weight: 550;
        background-color: #f4f3ff;
        padding: 6px 17px;
        border-radius: 100px;
        margin: 0;
    }

    .searchInput {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        width: 50%;

        input {
            height: 44px;
            padding: 12px 15px;
            border: 0.5px solid #e1e1e1;
            border-radius: 8px;
            box-sizing: border-box;
            width: 100%;
        }

        img {
            margin-left: -86px;
            padding-right: 16px;
        }
    }
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    padding: 11px 16px 9px 0;
    box-sizing: border-box;

    p {
        font-weight: 550;
        font-size: 16px;
        line-height: 16px;
        color: #000000;
    }

    .ManageAccount {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        p {
            font-weight: 550;
            font-size: 16px;
            line-height: 18px;
            display: flex;
            align-items: center;
            text-align: right;
            margin-right: 11px;
            color: #5444f2;
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
        margin-bottom: 22px;
        width: 33%;
    }

    p:nth-child(2) {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #65717c;
        width: 100%;
        text-align: left;
        margin: 0;
        margin-bottom: 22px;
        width: 40%;
    }

    p:nth-child(3) {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #65717c;
        width: 100%;
        text-align: left;
        margin: 0;
        margin-bottom: 22px;
        width: 25%;
    }
`;

const BankDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 0.5px solid rgba(225, 225, 225, 0.8);
    cursor: pointer;

    &:hover {
        background-color: #f4f3ff;
        border-left: 4px solid red;

        .bankLogo {
            width: calc(10% + 25px);

            img {
                margin-left: 25px;
            }
        }
    }

    .bankLogo {
        width: calc(10% + 29px);

        img {
            margin-left: 29px;
        }
    }

    .bankName {
        width: 23%;

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .totalInFlow {
        width: 20%;

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            margin: 0;
        }
    }

    .accountNumber {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 20%;

        p {
            color: #1a72f7;
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            margin-right: 20%;
        }
    }

    .locationDetails {
        width: 20%;

        .location {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            padding: 4px 6px;
            border-radius: 4px;

            img {
                background: ${(props) => props.backgroundColor};
                padding: 4px 6px;
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
                padding: 4px 6px;
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

    .more {
        width: 7%;
    }
`;

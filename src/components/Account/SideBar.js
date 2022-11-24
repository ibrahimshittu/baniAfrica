import React from "react";
import styled from "styled-components";
import radar from "../../assets/radar.svg";
import category from "../../assets/category.svg";
import wallet from "../../assets/wallet.svg";
import transaction from "../../assets/transaction.svg";
import document from "../../assets/document.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import folderOpen from "../../assets/folder-open.svg";
import user from "../../assets/profile-2user.svg";
import setting from "../../assets/setting.svg";
import driver from "../../assets/driver.svg";
import toggle from "../../assets/toggle.svg";

function SideBar() {
    return (
        <Container>
            <Company>
                <div className="menuSection">
                    <img src={radar} alt="logo" />
                    <p>Welcome</p>
                </div>
                <div className="menuSection">
                    <img src={document} alt="logo" />
                    <p>Compliance</p>
                </div>
                <div className="menuSection">
                    <img src={category} alt="logo" />
                    <p>Overview</p>
                </div>
            </Company>
            <Business>
                <h4>BUSINESS</h4>
                <div className="menuSection">
                    <img src={shoppingBag} alt="logo" />
                    <p>Products</p>
                </div>
                <div className="menuSection">
                    <img src={user} alt="logo" />
                    <p>Customer</p>
                </div>
                <div className="menuSection">
                    <img src={shoppingCart} alt="logo" />
                    <p>Orders</p>
                </div>
            </Business>
            <Payments>
                <h4>PAYMENTS</h4>
                <div className="menuSection">
                    <img src={wallet} alt="logo" />
                    <p>Wallet</p>
                </div>
                <div className="menuSection">
                    <img src={transaction} alt="logo" />
                    <p>Transaction</p>
                </div>
                <div className="menuSectionNew">
                    <img src={folderOpen} alt="logo" />
                    <div className="newFeature">
                        <p>Virtual Account</p>
                        <p>New</p>
                    </div>
                </div>
            </Payments>
            <BottomNavs>
                <div className="menuSection">
                    <img src={toggle} alt="logo" />
                    <p>Live mode</p>
                </div>
                <div className="menuSection">
                    <img src={setting} alt="logo" />
                    <p>Settings</p>
                </div>
                <div className="menuSection">
                    <img src={driver} alt="logo" />
                    <p>Audit Logs</p>
                </div>
            </BottomNavs>
        </Container>
    );
}

export default SideBar;

const Container = styled.div`
    width: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: #fff;
    height: 100%;
    box-sizing: border-box;
    position: relative;
`;

const Company = styled.div`
    width: 100%;
    padding-left: 10%;
    margin-top: 0.9rem;
    margin-bottom: 1.3rem;
    box-sizing: border-box;

    .menuSection {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        margin-bottom: 1rem;
        cursor: pointer;

        img {
            margin-right: 1rem;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #65717c;
        }
    }
`;

const Business = styled.div`
    width: 100%;
    padding-left: 10%;
    margin-bottom: 1.3rem;
    box-sizing: border-box;

    h4 {
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 550;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.165em;
        color: #000000;
    }

    .menuSection {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        margin-bottom: 1rem;
        cursor: pointer;

        img {
            margin-right: 1rem;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #65717c;
        }
    }
`;

const Payments = styled.div`
    width: 100%;
    padding-left: 10%;
    margin-bottom: 1.3rem;
    box-sizing: border-box;

    h4 {
        margin: 0;
        margin-bottom: 1.3rem;
        font-weight: 550;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.165em;
        color: #000000;
    }

    .menuSection {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        cursor: pointer;
        margin-bottom: 1rem;

        img {
            margin-right: 1rem;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #65717c;
        }
    }
    .menuSectionNew {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        box-sizing: border-box;
        cursor: pointer;
        margin-bottom: 1rem;

        img {
            margin-right: 1rem;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #5444f2;
        }

        .newFeature {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            box-sizing: border-box;

            p:nth-child(2) {
                font-weight: 300;
                font-size: 12px;
                line-height: 140%;
                letter-spacing: 0.005em;
                color: #02ba81;
                margin-top: 0.3rem;
            }
        }
    }
`;

const BottomNavs = styled.div`
    background: rgba(245, 246, 250, 0.2);

    width: 100%;
    padding-left: 10%;
    margin-bottom: 1rem;
    box-sizing: border-box;

    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 0.5px solid #e1e1e1;
    margin-bottom: calc(0.9rem + 78px);
    padding-top: 1.4rem;

    .menuSection {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        cursor: pointer;
        margin-bottom: 1rem;

        img {
            margin-right: 1rem;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #65717c;
        }
    }
`;

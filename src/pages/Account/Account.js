import React from "react";
import CreateAccountRow from "../../components/Account/CreateAccountRow";
import Header from "../../components/Account/Header";
import SideBar from "../../components/Account/SideBar";
import VirtualAccountDetails from "../../components/Account/VirtualAccountDetails";
import YourVirtualAccounts from "../../components/Account/YourVirtualAccounts";
import {
    AccountsActivityFeedRow,
    ActivityFeed,
    Container,
    DashboardDetails,
    MainContents,
    VirtualAccounts,
} from "./AccountStyles";
import FBN from "../../assets/Polaris.svg";
import providus from "../../assets/FirstBank.svg";
import polarisBank from "../../assets/Providus.svg";
import GT from "../../assets/FBN.svg";
import formatSquareBlue from "../../assets/bankSquarePurple.svg";
import formatSquareOrange from "../../assets/format-squareOrange.svg";
import formatSquarePurple from "../../assets/format-squarePurple.svg";
import AccountActivityFeed from "../../components/Account/AccountActivityFeed";

function Account() {
    const Banks = [
        {
            bankName: "Polaris Bank Limited",
            accountNumber: "0012345678",
            location: "Dodo - Ikeja",
            totalInflow: "NGN 100,000.00",
            color: "#1A72F7",
            backgroundColor: "#E8F0FF",
            image: polarisBank,
            square: formatSquareBlue,
        },
        {
            bankName: "Guaranty Trust Holding",
            accountNumber: "0023456781",
            location: "Dodo - Lekki II",
            totalInflow: "NGN 777,823.00",
            color: "#EA8A15",
            backgroundColor: "#FFF6EB",
            image: GT,
            square: formatSquareOrange,
        },
        {
            bankName: "Providus Bank PLC",
            accountNumber: "1002345678",
            location: "Dodo - Lekki II",
            totalInflow: "NGN 157,823.00",
            color: "#EA8A15",
            backgroundColor: "#FFF6EB",
            image: providus,
            square: formatSquareOrange,
        },
        {
            bankName: "First Bank of Nigeria",
            accountNumber: "2002345678",
            location: "Dodo - Abuja",
            totalInflow: "NGN 100,003.00",
            color: "#B01AF7",
            backgroundColor: "#F2EBFF",
            image: FBN,
            square: formatSquarePurple,
        },
    ];

    return (
        <Container>
            <Header />
            <MainContents>
                <SideBar />
                <DashboardDetails>
                    <CreateAccountRow />
                    <AccountsActivityFeedRow>
                        <VirtualAccounts>
                            <VirtualAccountDetails />
                            <YourVirtualAccounts banks={Banks} />
                        </VirtualAccounts>
                        <ActivityFeed>
                            <AccountActivityFeed />
                        </ActivityFeed>
                    </AccountsActivityFeedRow>
                </DashboardDetails>
            </MainContents>
        </Container>
    );
}

export default Account;

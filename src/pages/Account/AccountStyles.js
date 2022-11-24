import styled from "styled-components";

const Container = styled.div`
    background-color: lightgray;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const MainContents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
`;

const DashboardDetails = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export { Container, MainContents, DashboardDetails };

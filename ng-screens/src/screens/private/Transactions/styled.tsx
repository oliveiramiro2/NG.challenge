import styled from "styled-components";

export const SContain = styled.div`
    background-color: #00000063;
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 20vh;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const SContainMakeTransaction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-width: 50vw;
    background: #fff;
    border: 1px solid #ffd900;
    border-radius: 10px;
    margin: 0 50px;
    padding: 5px;

    & div {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    & span {
        font-size: 22px;
        font-weight: bold;
        font-family: "Times New Roman", Times, serif;
        margin-bottom: 15px;
    }

    & div input {
        border-radius: 5px;
        padding-left: 4px;
        border: 2px solid #03a81e;
        outline-color: #03a81e;
    }

    & button {
        background: #03a81e;
        cursor: pointer;
        width: 180px;
        height: 25px;
        border-radius: 10px;
        border: 1px solid #00ff2a;
        margin-top: 5px;
    }

    & button span {
        font-size: 14px;
        font-weight: 100;
        color: #fff;
    }
`;

export const SContainTransactions = styled.div`
    background: #fff;
    border: 1px solid #ffd900;
    border-radius: 10px;
    margin: 0 50px;
    padding: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        font-size: 22px;
        font-weight: bold;
        font-family: "Times New Roman", Times, serif;
    }

    & button {
        border: none;
        background: #fff;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    & aside {
        display: flex;
        align-self: flex-start;
        align-items: flex-start;
        justify-content: center;
        margin-left: 10px;
        flex-direction: column;
        width: 100%;
    }

    & aside button p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
    }

    & aside button p svg {
        margin-right: 2px;
    }

    & aside nav {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-left: 10px;
        max-width: 100%;
    }

    & aside nav div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    & aside nav div span {
        margin: 0 5px;
        font-family: monospace;
        font-weight: bold;
    }

    & article {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const SContainTransactionCard = styled.div`
    background: #181818;
    border: 1px solid #ffd900;
    border-radius: 10px;
    margin: 10px 5px;
    padding: 10px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;

    & span,
    & strong {
        color: #fff;
    }

    & strong {
        display: flex;
        align-self: center;
        margin-bottom: 5px;
    }
`;

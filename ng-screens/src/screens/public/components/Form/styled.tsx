import styled from "styled-components";

const imgBG = require("../../../../assets/imgs/imgHome.png");

export const SContainPictureBackground = styled.div`
    background: url(${imgBG}) no-repeat content-box;
    width: 100vw;
`;

export const SContainTransparent = styled.div`
    background: #ffffffd5;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
`;

export const SImgUser = styled.img`
    max-width: 70%;
    max-height: 100px;
`

export const SContainForm = styled.div`
    background: #fff;
    width: 35vw;
    height: 85vh;
    margin-top: 17vh;
    border-radius: 20px;
    border: #ffd900 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;

    @media (max-width: 600px) {
        width: 50vw;
    }

    & article {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    & article p {
        font-size: 22px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    & aside {
        width: 100%;
        display: flex;
        align-self: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        bottom: 40px;
    }

    & aside div {
        display: flex;
        align-self: center;
        align-items: center;
        flex-direction: column;
        width: 70%;
    }

    & aside div p {
        align-self: baseline;
        font-weight: bolder;
        font-size: 15px;
        position: relative;
        top: 8px;
    }

    & aside div svg {
        align-self: baseline;
        position: relative;
        top: 14px;
    }
`;
export const SInput = styled.input`
    width: 23vw;
    border: none;
    border-bottom: 2px #222 solid;
    border-radius: 3px;
    box-sizing: content-box;
    padding-left: 22px;

    @media (max-width: 800px) {
        width: 22vw;
        padding-left: 25px;
    }

    @media (max-width: 600px) {
        width: 30vw;
        padding-left: 20px;
    }

    &:active {
        background: #00ff4c1d;
    }

    &:focus {
        outline: 0;
        border-bottom: 2px #00d841 solid;
    }
`;

export const SbuttonSend = styled.button`
    width: 23vw;
    height: 30px;
    border-radius: 10px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        color: #fff;
        font-weight: bold;
    }
`

import styled from "styled-components";

export const SContain = styled.div`
    background-color: #00000063;
    min-width: 100vw;
    min-height: 100vh;
    border: 0;
    display: flex;
    align-items: center;
`;

export const SContainerContent = styled.div`
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 50px;

    & article {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        @media (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            justify-content: center;
        }
    }
`;

export const STitleUserName = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    font-family: monospace;
    display: flex;
    justify-content: center;
`;

export const SImgHome = styled.img`
    max-height: 50vh;
    max-width: 50vw;
    border: 2px solid #ffd900;
    border-radius: 10px;

    @media (max-width: 1100px) {
        max-height: 80vh;
        max-width: 50vw;
    }

    @media (max-width: 1000px) {
        margin-left: 20vw;
    }

    @media (max-width: 600px) {
        margin-left: 13vw;
    }
`;

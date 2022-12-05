import styled from "styled-components";

export const SContainerHome = styled.div`
    background-color: #00000058;
    width: 100vw;
    height: 100vh;
    border: 0;
    display: flex;
    align-items: center;
`;

export const SContainerContent = styled.div`
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;

    & div {
        width: 40vw;
        display: flex;
        align-items: center;
    }

    & p {
        color: #ddd;
        font-size: 50px;
        font-weight: 400;
        word-break: keep-all;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 95px 0 20px 0;

        & p {
            color: #ddd;
            font-size: 25px;
            font-weight: 400;
            word-break: keep-all;
        }
    }
`;

export const SImgHome = styled.img`
    max-height: 50vh;
    max-width: 50vw;

    @media (max-width: 1100px) {
        max-height: 80vh;
        max-width: 50vw;
    }
`;

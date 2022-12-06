import styled from "styled-components";

export const SContainerHome = styled.div`
    background-color: #00000058;
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

    & p::after {
        content: "|";
        margin-left: 5px;
        animation: blink 0.8s infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0.1;
        }
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
    border: 2px solid #ffd900;
    border-radius: 10px;

    @media (max-width: 1100px) {
        max-height: 80vh;
        max-width: 50vw;
    }
`;

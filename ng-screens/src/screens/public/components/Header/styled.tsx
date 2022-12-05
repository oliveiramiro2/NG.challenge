import styled from "styled-components";

export const SHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;

    & article,
    div {
        width: 50%;
        padding: 0 45px 0 45px;
    }

    & div {
        display: flex;
        justify-content: end;
    }

    & article a {
        font-weight: bold;
        font-size: 22px;
    }

    & a {
        color: #ddd;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
    }
`;

export const SALast = styled.a`
    margin-right: 25px;
`;

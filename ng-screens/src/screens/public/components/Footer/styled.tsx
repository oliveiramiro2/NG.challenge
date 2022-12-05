import styled from "styled-components";

export const SFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    max-height: 10vh;
    width: 100vw;
    background: #fff;
    display: flex;
    justify-content: center;

    & p {
        font-weight: bold;
        font-size: 20px;
    }
`;

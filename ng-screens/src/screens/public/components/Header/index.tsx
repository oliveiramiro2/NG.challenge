import React from "react";
import { IoMdHome, IoMdLogIn } from "react-icons/io";

import { SHeader, SALast } from "./styled";

const HeaderPublic: React.FC = () => {
    return (
        <SHeader>
            <article>
                <a href="/">
                    <IoMdHome color="#fff" /> NG Cash
                </a>
            </article>
            <div>
                <SALast href="/login">Entrar</SALast>
                <a href="/cadastrar">
                    <IoMdLogIn />
                    Registar
                </a>
            </div>
        </SHeader>
    );
};

export default HeaderPublic;

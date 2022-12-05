import React from "react";

import { SHeader, SALast } from "./styled";

const HeaderPublic: React.FC = () => {
    return (
        <SHeader>
            <article>
                <a href="/">NG Cash</a>
            </article>
            <div>
                <SALast href="/login">Entrar</SALast>
                <a href="/cadastro">Registar</a>
            </div>
        </SHeader>
    );
};

export default HeaderPublic;

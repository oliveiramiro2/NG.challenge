import React, { useEffect } from "react";
import FooterPublic from "../components/Footer";
import HeaderPublic from "../components/Header";

import { SContainerHome, SContainerContent, SImgHome } from "./styled";

const imgHome = require("../../../assets/imgs/imgHome.png");

const HomePublic: React.FC = () => {
    const writeInfo = (elementT: any) => {
        const elementText = elementT;
        const text = elementText.innerHTML.split("");
        elementText.innerHTML = "";
        text.forEach((value: any, index: any) => {
            setTimeout(() => {
                elementText.innerHTML += value;
            }, 100 * index);
        });
    };

    useEffect(() => {
        document.title = "NG challenge - Home";

        const elementText = document.querySelector("#textPublicHome");
        writeInfo(elementText);
    }, []);

    return (
        <SContainerHome>
            <HeaderPublic />

            <SContainerContent>
                <div>
                    <SImgHome alt="imagem-carteira" src={imgHome} />
                </div>
                <div>
                    <p id="textPublicHome">
                        Sua nova forma de administrar e transferir seu dinheiro
                        de maneira fácil, rápida e segura.
                    </p>
                </div>
            </SContainerContent>

            <FooterPublic />
        </SContainerHome>
    );
};

export default HomePublic;

import React, { useEffect, useContext, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import {
    SContain,
    SContainerContent,
    SImgHome,
    STitleUserName,
} from "./styled";
import HeaderPrivate from "../components/HeaderPrivate";
import { AuthContext } from "../../../services/auth";
import { api } from "../../../services/api";

const imgHome = require("../../../assets/imgs/imgHome.png");

const HomePrivate: React.FC = () => {
    const [balance, setBalance] = useState<number>(0.0);
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        document.title = "NG challenge - Home";

        api.get("/account", {
            headers: { token: localStorage.getItem("token") },
        }).then(({data}) => {
            setBalance(data.balance)
        }).catch(() => {});
    }, []);

    return (
        <SContain>
            <HeaderPrivate />
            <SContainerContent>
                <ScrollAnimation animateIn="bounceInRight">
                    <STitleUserName>{`Bem-vindo ${userData.username}`}</STitleUserName>
                </ScrollAnimation>
                <article>
                    <SImgHome alt="imagem-carteira" src={imgHome} />
                    <STitleUserName>{`Saldo: R$ ${balance}.00`}</STitleUserName>
                </article>
            </SContainerContent>
        </SContain>
    );
};

export default HomePrivate;

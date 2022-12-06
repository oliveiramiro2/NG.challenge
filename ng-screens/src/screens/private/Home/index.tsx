import React, { useEffect, useContext, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Store } from "react-notifications-component";

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
    const [dataRecovered, setDataRecovered] = useState<boolean>(false);

    const alertMessage = (msg: string, type: string) => {
        const typeOfAlert = type === "danger" ? "danger" : "success";
        Store.addNotification({
            message: `${msg}`,
            type: `${typeOfAlert}`,
            container: "center",
            insert: "top",
            animationIn: ["animate__animated", "animate__zoomIn"],
            animationOut: ["animate__animated", "animate__zoomOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
            },
        });
    };

    useEffect(() => {
        document.title = "NG challenge - Home";

        if (!dataRecovered) {
            api.get("/account", {
                headers: { token: localStorage.getItem("token") },
            })
                .then(({ data }) => {
                    setBalance(data.balance);
                    setDataRecovered(true);
                })
                .catch(() => {
                    alertMessage(
                        "Desculpe, não foi possível recurar seu saldo.",
                        "danger"
                    );
                });
        }
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
                    <STitleUserName>{`Saldo: R$ ${balance.toFixed(
                        2
                    )}`}</STitleUserName>
                </article>
            </SContainerContent>
        </SContain>
    );
};

export default HomePrivate;

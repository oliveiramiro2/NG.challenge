import React, { useState, useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Store } from "react-notifications-component";
import * as decode from "jwt-decode";

import { api } from "../../../../services/api";
import {
    SbuttonSend,
    SContainForm,
    SContainPictureBackground,
    SContainTransparent,
    SImgUser,
    SInput,
} from "./styled";
import { AuthContext } from "../../../../services/auth";

const imgUser = require("../../../../assets/imgs/user.png");

interface IProps {
    register: boolean;
}

interface IData {
    username: string;
    password: string;
}

const Form: React.FC<IProps> = ({ register }) => {
    const [data, setData] = useState<IData>({} as IData);

    const { setLogined, setUserData } = useContext(AuthContext);

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

    const sendData: Function = () => {
        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (data.username.length < 3) {
            alertMessage(
                "Seu nome de usuário deve conter no mínimo 3 caracteres",
                "danger"
            );
            return;
        }
        if (!regexPassword.test(data.password)) {
            alertMessage(
                "Sua senha deve conter uma letra minúscula, uma maiúscula e um número. Com o mínimo de 8 caracteres",
                "danger"
            );
            return;
        }

        const dataSend = { username: data.username, password: data.password };

        if (register) {
            api.post("/user", dataSend)
                .then(responseReturned => {
                    localStorage.setItem("token", responseReturned.data.token);
                    setUserData(decode.default(responseReturned.data.token));
                    setLogined(true);
                })
                .catch(() => {
                    alertMessage(
                        "O nome de usuário escolhido já está sendo usado por outra pessoa",
                        "danger"
                    );
                });
        } else {
            api.post("/user/login", dataSend)
                .then(responseReturned => {
                    localStorage.setItem("token", responseReturned.data.token);
                    setUserData(decode.default(responseReturned.data.token));
                    setLogined(true);
                })
                .catch(() => {
                    alertMessage(
                        "O nome de usuário ou senha está incorreto",
                        "danger"
                    );
                });
        }
    };

    return (
        <SContainPictureBackground>
            <SContainTransparent>
                <SContainForm>
                    <article>
                        <SImgUser src={imgUser} alt="Usuário" />
                        <p>{register ? "Cadastro" : "Login"}</p>
                    </article>
                    <aside>
                        <div>
                            <p>Username</p>
                            <FaUserAlt size="14px" color="#00d841" />
                            <SInput
                                id="inputUsername"
                                alt="UserName"
                                defaultValue={data.username}
                                onChange={e =>
                                    setData({
                                        ...data,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            <RiLockPasswordFill color="#00d841" />
                            <SInput
                                id="inputPassword"
                                alt="Password"
                                type="password"
                                defaultValue={data.password}
                                onChange={e =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </aside>
                    <SbuttonSend type="button" onClick={() => sendData()}>
                        <p>{register ? "Cadastrar" : "Entrar"}</p>
                    </SbuttonSend>
                </SContainForm>
            </SContainTransparent>
        </SContainPictureBackground>
    );
};

export default Form;

import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import {
    SbuttonSend,
    SContainForm,
    SContainPictureBackground,
    SContainTransparent,
    SImgUser,
    SInput,
} from "./styled";

const imgUser = require("../../../../assets/imgs/user.png");

interface IProps {
    register: boolean;
}

const Form: React.FC<IProps> = ({ register }) => {
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
                            <SInput id="inputUsername" alt="UserName" />
                        </div>
                        <div>
                            <p>Password</p>
                            <RiLockPasswordFill color="#00d841" />
                            <SInput
                                id="inputPassword"
                                alt="Password"
                                type="password"
                            />
                        </div>
                    </aside>
                    <SbuttonSend>
                        <p>{register ? "Cadastrar" : "Entrar"}</p>
                    </SbuttonSend>
                </SContainForm>
            </SContainTransparent>
        </SContainPictureBackground>
    );
};

export default Form;

import React, { useContext } from "react";
import { IoMdHome, IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router";
import { AuthContext, IUserData } from "../../../../services/auth";

import { SHeader, SALast } from "./styled";

const removeUserData: IUserData = {
    exp: 0,
    id: 0,
    iat: 0,
    password: '',
    username: ''
}

const HeaderPrivate: React.FC = () => {
    const { setLogined, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout: Function = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        localStorage.removeItem("token");
        setLogined(false)
        setUserData(removeUserData)
        navigate("/");
    };

    return (
        <SHeader>
            <article>
                <a href="/">
                    <IoMdHome color="#fff" /> NG Cash
                </a>
            </article>
            <div>
                <SALast href="/login">Transferências</SALast>
                <a href="/" onClick={e => logout(e)}>
                    <IoMdLogOut />
                    Sair
                </a>
            </div>
        </SHeader>
    );
};

export default HeaderPrivate;

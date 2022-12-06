import React, { useContext, useMemo } from "react";
import * as decode from "jwt-decode";

import PublicRoutes from "./public";
import PrivateRoutes from "./private";
import { AuthContext, IUserData } from "../services/auth";

const NGRoutes: React.FC = () => {
    const { logined, setLogined, setUserData } = useContext(AuthContext);

    const token: string | null = localStorage.getItem("token");

    if (token !== null) {
        const tokenData: IUserData = decode.default(token);
        if (tokenData.exp < new Date().getTime()) {
            setUserData(tokenData);
            setLogined(true);
        } else {
            localStorage.removeItem("token");
        }
    }

    const Routes = useMemo(
        () => (logined ? <PrivateRoutes /> : <PublicRoutes />),
        [logined]
    );

    return Routes;
};

export default NGRoutes;

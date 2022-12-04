import React, { useContext } from "react";
import PublicRoutes from "./public";

import { AuthContext } from "../services/auth";

const NGRoutes: React.FC = () => {
    const { logined } = useContext(AuthContext);

    return logined ? <PublicRoutes /> : <PublicRoutes />;
};

export default NGRoutes;

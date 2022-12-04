import React from "react";
import { Routes, Route } from "react-router-dom";

import SingIn from "../../screens/public/SingIn";
import SingUp from "../../screens/public/SingUp";

const PublicRoutes: React.FC = () => (
    <Routes>
        <Route path="/cadastrar" element={<SingUp />} />
        <Route path="/" element={<SingIn />} />
    </Routes>
);

export default PublicRoutes;

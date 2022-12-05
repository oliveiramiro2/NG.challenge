import React from "react";
import { Routes, Route } from "react-router-dom";

import SingIn from "../../screens/public/SingIn";
import SingUp from "../../screens/public/SingUp";
import HomePublic from "../../screens/public/Home";

const PublicRoutes: React.FC = () => (
    <Routes>
        <Route path="/login" element={<SingIn />} />
        <Route path="/cadastrar" element={<SingUp />} />
        <Route path="/" element={<HomePublic />} />
    </Routes>
);

export default PublicRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import SingIn from "../../screens/public/SingIn";

const PublicRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SingIn />} />
    </Routes>
);

export default PublicRoutes;

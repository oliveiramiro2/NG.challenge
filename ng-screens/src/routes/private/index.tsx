import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePrivate from "../../screens/private/Home";

const PrivateRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<HomePrivate />} />
    </Routes>
);

export default PrivateRoutes;

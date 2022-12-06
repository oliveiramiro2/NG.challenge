import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePrivate from "../../screens/private/Home";
import Transactions from "../../screens/private/Transactions";

const PrivateRoutes: React.FC = () => (
    <Routes>
        <Route path="/transacoes" element={<Transactions />} />
        <Route path="/" element={<HomePrivate />} />
    </Routes>
);

export default PrivateRoutes;

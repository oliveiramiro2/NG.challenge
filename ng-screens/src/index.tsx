import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactNotifications } from 'react-notifications-component'
import "react-notifications-component/dist/theme.css";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NGRoutes from "./routes";
import AuthProvider from "./services/auth";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ReactNotifications />
                <NGRoutes />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

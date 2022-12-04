import React from "react";
import ReactDOM from "react-dom/client";
import NGRoutes from "./routes";
import reportWebVitals from "./reportWebVitals";

import AuthProvider from "./services/auth";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <NGRoutes />
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

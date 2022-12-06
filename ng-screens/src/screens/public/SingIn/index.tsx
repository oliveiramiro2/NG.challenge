import React, { useEffect } from "react";
import Form from "../components/Form";
import HeaderPublic from "../components/Header";

const SingIn: React.FC = () => {
    useEffect(() => {
        document.title = "NG challenge - Entrar";
    }, []);

    return (
        <div>
            <HeaderPublic />
            <Form register={false} />
        </div>
    );
};

export default SingIn;

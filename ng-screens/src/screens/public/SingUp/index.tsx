import React, { useEffect } from "react";
import Form from "../components/Form";
import HeaderPublic from "../components/Header";

const SingUp: React.FC = () => {
    useEffect(() => {
        document.title = "NG challenge - Cadastrar";
    }, []);
    
    return (
        <div>
            <HeaderPublic />
            <Form register />
        </div>
    );
};

export default SingUp;

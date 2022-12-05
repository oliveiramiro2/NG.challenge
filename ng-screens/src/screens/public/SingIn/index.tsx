import React from "react";
import Form from "../components/Form";
import HeaderPublic from "../components/Header";

const SingIn: React.FC = () => {
    return (
        <div>
            <HeaderPublic />
            <Form register={false} />
        </div>
    );
};

export default SingIn;

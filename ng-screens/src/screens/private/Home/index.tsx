import React, { useEffect } from "react";

const HomePrivate: React.FC = () => {
    useEffect(() => {
        document.title = "NG challenge - Home";
    }, []);

    return <div>Private Home</div>;
};

export default HomePrivate;

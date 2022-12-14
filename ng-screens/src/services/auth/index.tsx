import React, { createContext, useState, useMemo } from "react";

export interface IUserData {
    username: string;
    password: string;
    id: number;
    iat: number;
    exp: number;
}

export interface IContextData {
    userData: IUserData;
    setUserData: Function;
    logined: boolean;
    setLogined: Function;
}

export const AuthContext = createContext<IContextData>({} as IContextData);

const AuthProvider = ({ children }: any) => {
    const [userData, setUserData] = useState<IUserData>({} as IUserData);
    const [logined, setLogined] = useState<boolean>(false);

    const valueContext = useMemo(
        () => ({
            userData,
            setUserData,
            logined,
            setLogined,
        }),
        [logined, userData]
    );

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

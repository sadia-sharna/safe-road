import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { ILogin, ISignup } from '../core';
import { privateRoutePathName } from '../navigation/constant';
import { USER_STORAGE } from '../services/authService';

const AuthContext = React.createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<any>(null);


    const login = (model: ILogin) => {
        let data = localStorage.getItem(USER_STORAGE);
        let users = data != null ? JSON.parse(data) : null;
        let findUser = users.find((x: ILogin) => x.email === model.email && x.password === model.password);
        if (findUser) {
            setCurrentUser(findUser);
        }
        return findUser;

    };
    const signup = (model: ISignup) => {


        let users = [];
        users.push(model);
        localStorage.setItem(USER_STORAGE, JSON.stringify(users));


    };

    const logout = () => {

    };

    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}




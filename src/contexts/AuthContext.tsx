import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { ILogin, ISignup, IUser } from '../core';
import { privateRoutePathName } from '../navigation/constant';
import { CreateUser, CURRENT_USER_STORAGE, Login, USERS_STORAGE } from '../services/authService';

const AuthContext = React.createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
};

const getPersistedData = () => {
    const currentStorageData = localStorage.getItem(CURRENT_USER_STORAGE);
    const currentUser = currentStorageData != null ? JSON.parse(currentStorageData) : null;
    return currentUser;
}
export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<any>(getPersistedData());


    const login = (model: ILogin) => {
        try {
            const findUser = Login(model);
            setCurrentUser(findUser);

        }
        catch (err) {
            throw err;
        }
        // let data = localStorage.getItem(USERS_STORAGE);
        // let users = data != null ? JSON.parse(data) : null;
        // let findUser = users.find((x: IUser) => x.email === model.email && x.password === model.password);
        // if (findUser) {

        //     localStorage.setItem(CURRENT_USER_STORAGE, JSON.stringify(findUser))
        //     setCurrentUser(findUser);
        // }
        // return findUser;

    };
    const signup = (model: ISignup) => {
        CreateUser(model);
    };

    const logout = () => {
        localStorage.removeItem(CURRENT_USER_STORAGE);
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




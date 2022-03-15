import React, { useContext, useState } from 'react';
import { ILogin, ISignup } from '../core';
import { CreateUser, CURRENT_USER_STORAGE, Login } from '../services/authService';

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




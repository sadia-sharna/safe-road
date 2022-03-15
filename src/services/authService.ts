import { EmailIsUsedMsg, LogInErrMsg } from "../core";
import { ILogin, ISignup, IUser } from "../core/models";

export const USERS_STORAGE = "USERS";
export const CURRENT_USER_STORAGE = "CURRENT-USER";

export const CreateUser = (model: ISignup) => {
    const users = GetUsers();
    const isExist = users.find((x: any) => x.email === model.email);
    if (!isExist) {
        return localStorage.setItem(USERS_STORAGE, JSON.stringify([...users, model]));

    }
    else throw EmailIsUsedMsg;

};

export const Login = (model: ILogin) => {
    const users = GetUsers();
    const findUser = users.find((x: IUser) => x.email === model.email && x.password === model.password);
    if (findUser) {
        localStorage.setItem(CURRENT_USER_STORAGE, JSON.stringify(findUser));
        return findUser;
    }
    else throw LogInErrMsg;
};

export const GetUsers = () => {
    const userStorageData = localStorage.getItem(USERS_STORAGE);
    const users = userStorageData ? JSON.parse(userStorageData) : [];
    return users;
};


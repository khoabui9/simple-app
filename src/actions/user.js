import * as UserActionTypes from '../actiontypes/user';


export const loginRequesting = (username, password) => {
    return {
        type: UserActionTypes.LOGIN_REQUESTING,
        username: username,
        password: password
    };
};

export const login = (isAuth) => {
    return {
        type: UserActionTypes.LOGIN,
        isAuth
    };
};

export const logout = () => {
    return {
        type: UserActionTypes.LOGOUT,
    };
};

export const updateIncrement = (num) => {
    return {
        type: UserActionTypes.UPDATE_INCREMENT,
        number: num
    };
};
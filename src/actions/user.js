import * as UserActionTypes from '../actiontypes/user';

export const login = (username, password) => {
    return {
        type: UserActionTypes.LOGIN,
        username: username,
        password: password
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
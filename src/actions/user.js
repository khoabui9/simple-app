import * as UserActionTypes from '../actiontypes/user';


export const loginRequesting = (username, password) => {
    return {
        type: UserActionTypes.LOGIN_REQUESTING,
        username: username,
        password: password
    };
};

// export const login = () => {
//     return {
//         type: UserActionTypes.LOGIN,
//     };
// };

export const logoutRequesting = () => {
    return {
        type: UserActionTypes.LOGOUT_REQUESTING,
    };
};

export const updateIncrement = (number) => {
    return {
        type: UserActionTypes.UPDATE_INCREMENT,
        number
    };
};

export const updateDecrement = (number) => {
    return {
        type: UserActionTypes.UPDATE_DECREMENT,
        number
    };
};

// export const increment = (number) => {
//     return {
//         type: UserActionTypes.INCREMENT,
//     };
// };


// export const decrement = (number) => {
//     return {
//         type: UserActionTypes.INCREMENT,
//     };
// };

import * as UserActionTypes from '../actiontypes/user';

const initialState = {  
    user: null,
    login: false,
    isAuthenticated: false,
    number: 0
  }

export default function User(state=initialState, action) {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUESTING:
            return { ...state, login: true };
        case UserActionTypes.LOGIN:
            var username = action.response.data().username
            return { ...state, user: username, isAuthenticated: true };
        case UserActionTypes.LOGOUT:
            return {
                user: null,
                login: false,
                isAuthenticated: false,
                number: 0
            };
        case UserActionTypes.UPDATE_INCREMENT:
            return {...state, number: number+1};
        default: 
            return state
    }
}
import * as UserActionTypes from '../actiontypes/user';

const initialState = {
    user: null,
    login: false,
    isAuthenticated: false,
    number: 0,
    logout: true
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * 
 * user reducers
 */
export default function User(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUESTING:
            return { ...state,
                login: true
            };
        case UserActionTypes.LOGIN:
            var username = action.response.data().username
            return { ...state,
                user: username,
                number: 0,
                isAuthenticated: true
            };
        case UserActionTypes.LOGOUT_REQUESTING:
            return state;
        case UserActionTypes.LOGOUT:
            return {
                user: null,
                login: false,
                isAuthenticated: false,
                number: null,
            };
        case UserActionTypes.UPDATE_INCREMENT:
            return { ...state,
                number: state.number + action.number
            };
        case UserActionTypes.UPDATE_DECREMENT:
            return { ...state,
                number: state.number - action.number
            };
        default:
            return state
    }
}
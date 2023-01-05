import * as authActions from './auth.actions';

export interface State {
    loggedInStatus: boolean;
    user: {
        email: string,
        password: string
    }

}

const initialState: State = {
    loggedInStatus: false,
    user: {
        email: '',
        password: '',
    }
}

export function authReducer(state = initialState, action: authActions.AuthActions) {
    switch (action.type) {
        case authActions.LOGIN:
            console.log("reached reducer")
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        case authActions.LOGIN_COMPLETE:
            console.log("login complete reached");
            return {
                ...state,
                loggedInStatus: action.payload
            }
        case authActions.LOGGEDIN:
            if (JSON.parse(localStorage.getItem('userData') || '{}').jwtToken) {
                return {
                    ...state,
                    loggedInStatus: true
                }
            } else {
                return {
                    ...state,
                    loggedInStatus: false
                }
            }
        default:
            return {
                ...state
            }
    }
}
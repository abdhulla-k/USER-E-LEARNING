import * as authActions from './auth.actions';

export interface State {
    loggedInStatus: boolean;
    emailVerified: boolean;
    emailVerificationData: {
        id: string,
        token: string
    }
    user: {
        email: string,
        password: string
    }

}

const initialState: State = {
    loggedInStatus: false,
    emailVerified: false,
    emailVerificationData: {
        id: '',
        token: ''
    },
    user: {
        email: '',
        password: '',
    }
}

export function authReducer(state = initialState, action: authActions.AuthActions) {
    switch (action.type) {
        case authActions.VERIFY_EMAIL_START:
            return {
                ...state,
                emailVerificationData: {
                    id: action.payload.id,
                    token: action.payload.token
                }
            }
        case authActions.VERIFY_EMAIL_COMPLETED:
            return {
                ...state,
                emailVerified: action.payload
            }
        case authActions.LOGIN:
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        case authActions.LOGIN_COMPLETE:
            // for login first time
            return {
                ...state,
                loggedInStatus: action.payload
            }
        case authActions.LOGGEDIN:
            // for auto login
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
        case authActions.LOGOUT:
            // for logout
            localStorage.clear();
            return {
                ...state,
                loggedInStatus: false
            }
        default:
            return {
                ...state
            }
    }
}
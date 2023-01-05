import { Action } from "@ngrx/store";

export const LOGIN = 'LOGIN';
export const LOGGEDIN = 'LOGGEDIN';
export const LOGIN_COMPLETE = '[Auth] Login Complete';
export const LOGOUT = '[Auth] Log Out'

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: {
        email: string,
        password: string
    }) {}
}

export class LoggedIn implements Action {
    readonly type = LOGGEDIN;
}

export class LoginComplete implements Action {
    readonly type = LOGIN_COMPLETE
    constructor(public payload: boolean) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export type AuthActions = 
    Login |
    LoggedIn |
    LoginComplete |
    Logout;
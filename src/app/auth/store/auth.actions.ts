import { Action } from "@ngrx/store";

export const LOGIN = 'LOGIN';
export const LOGGEDIN = 'LOGGEDIN'

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

export type AuthActions = 
    Login |
    LoggedIn;
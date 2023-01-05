import { Action } from "@ngrx/store";

export const VERIFY_EMAIL_START = '[Auth] Verify Email Request'
export const VERIFY_EMAIL_COMPLETED = '[Auth] Verify Email Response Got'
export const LOGIN = 'LOGIN';
export const LOGGEDIN = 'LOGGEDIN';
export const LOGIN_COMPLETE = '[Auth] Login Complete';
export const LOGOUT = '[Auth] Log Out'

export class VerifyEmailStart implements Action {
    readonly type = VERIFY_EMAIL_START;
    constructor (public payload: {
        id: string,
        token: string
    }) {}
}

export class VerificationConplete implements Action {
    readonly type = VERIFY_EMAIL_COMPLETED;
    constructor (public payload: boolean) {}
}

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
    VerifyEmailStart |
    VerificationConplete |
    Login |
    LoggedIn |
    LoginComplete |
    Logout;
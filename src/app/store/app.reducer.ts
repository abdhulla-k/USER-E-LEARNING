import { ActionReducerMap } from "@ngrx/store";

import * as fromAuthentication from "../auth/store/auth.reducer";

export interface AppState {
    authentication: fromAuthentication.State
}

export const appReducer: ActionReducerMap<AppState, any> = {
    authentication: fromAuthentication.authReducer,
}
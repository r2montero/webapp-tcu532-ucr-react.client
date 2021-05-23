import { types } from "../types/types";

const initialState = {
    ckecking: true,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ckecking: false,
                ...action.payload
            }

        case types.authCheckingFinish:
            return {
                ...state,
                ckecking: false,
            }

        default:
            return state;
    }
}
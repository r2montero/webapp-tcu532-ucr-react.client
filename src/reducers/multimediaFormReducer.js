import { types } from "../types/types";

const initialState = {
    openForm: false
}

export const multimediaFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenForm:
            return ({
                ...state,
                openForm: true
            })

        case types.uiCloseForm:
            return ({
                ...state,
                openForm: false
            })

        default:
            return state;
    }
}
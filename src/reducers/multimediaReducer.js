import { types } from "../types/types";

const initialState = {
    multimedia: [],
    activeMulti: null,
}

export const multimediaReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.multiSetActive: {
            return {
                ...state,
                activeMulti: action.payload
            };
        }

        case types.multiClearActive: {
            return {
                ...state,
                activeMulti: null
            };
        }

        case types.multiAddNew: {
            return {
                ...state,
                multimedia: [
                    ...state.multimedia,
                    action.payload
                ]
            };
        }

        case types.multiUpdated: {
            return {
                ...state,
                multimedia: state.multimedia.map(
                    s => (s._id === action.payload._id)
                        ? action.payload
                        : s
                )
            };
        }

        case types.multiDeleted: {
            return {
                ...state,
                multimedia: state.multimedia.filter(
                    s => (s._id !== state.activeMulti._id)
                ),
                activeMulti: null
            };
        }

        case types.multiLoaded: {
            return {
                ...state,
                multimedia: [...action.payload]
            };
        }

        case types.cleanMultiLogout: {
            return {
                ...initialState,
            };
        }

        default:
            return state;
    }
}
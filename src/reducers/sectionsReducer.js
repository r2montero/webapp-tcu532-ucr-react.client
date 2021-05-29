import { types } from "../types/types";

const initialState = {
    sections: [],
    activeSection: null,
}

export const sectionsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.sectionSetActive: {
            return {
                ...state,
                activeSection: action.payload
            };
        }

        case types.sectionClearActive: {
            return {
                ...state,
                activeSection: null
            };
        }

        case types.sectionAddNew: {
            return {
                ...state,
                sections: [
                    ...state.sections,
                    action.payload
                ]
            };
        }

        case types.sectionUpdated: {
            return {
                ...state,
                sections: state.sections.map(
                    s => (s._id === action.payload._id)
                        ? action.payload
                        : s
                )
            };
        }

        case types.sectionDeleted: {
            return {
                ...state,
                sections: state.sections.filter(
                    s => (s._id !== state.activeSection._id)
                ),
                activeSection: null
            };
        }

        case types.sectionsLoaded: {
            return {
                ...state,
                sections: [...action.payload]
            };
        }

        case types.cleanSectionsLogout: {
            return {
                ...initialState,
            };
        }

        default:
            return state;
    }
}
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sectionsFormReducer } from './sectionsFormReducer';
import { sectionsReducer } from './sectionsReducer';
import { uiErrorReducer } from './uiErrorReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiErrorReducer,
    section: sectionsReducer,
    sectionsForm: sectionsFormReducer
})

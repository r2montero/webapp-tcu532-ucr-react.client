import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { multimediaFormReducer } from './multimediaFormReducer';
import { multimediaReducer } from './multimediaReducer';
import { sectionsFormReducer } from './sectionsFormReducer';
import { sectionsReducer } from './sectionsReducer';
import { uiErrorReducer } from './uiErrorReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiErrorReducer,
    section: sectionsReducer,
    multimedia: multimediaReducer,
    sectionsForm: sectionsFormReducer,
    multimediaForm: multimediaFormReducer
})

import { types } from '../types/types';

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError,
});

export const uiOpenForm = () => ({ type: types.uiOpenForm });
export const uiCloseForm = () => ({ type: types.uiCloseForm });
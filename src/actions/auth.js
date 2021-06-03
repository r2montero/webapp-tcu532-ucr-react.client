import Swal from "sweetalert2";
import { types } from "../types/types";
import { cleanSectionsLogout } from '../actions/sections'
import { request } from "../helpers/requestsHelper";

export const startLogin = (email, password) => {

    return async (dispatch) => {
        try {
            const { ok, token, uid, name, } = await request('auth', { email, password }, 'POST');

            if (ok) {
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(logIn({
                    uid,
                    name
                }));

                console.log('Login Ok!')
            }

        } catch (error) {
            const { status, data: { msg } } = error.response;
            if (status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Datos Incorrectos',
                    text: msg,
                    footer: 'Acceso denegado',
                    backdrop: `rgba(65,173,231,0.6)`
                })
            } else {
                console.log(status + ' ' + msg);
                Swal.fire({
                    icon: 'error',
                    title: msg,
                    text: 'Intente más tarde',
                    footer: 'O contacte con el administrador',
                    backdrop: `rgba(65,173,231,0.6)`
                })
            }
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        try {
            const { ok, msg, token, uid, name, } = await request('auth/renew', {}, 'GET', true);
            if (ok) {
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(logIn({
                    uid,
                    name
                }));

                console.log('Token Ok!')
            } else {
                console.log(msg);
                dispatch(checkingFinish());
            }
        } catch (error) {
            console.error(error);
            dispatch(checkingFinish())
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const logIn = (user) => ({
    type: types.authLogin,
    payload: user,
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(cleanSectionsLogout());
        dispatch(logOut());
    }
}

const logOut = () => ({ type: types.authLogout });

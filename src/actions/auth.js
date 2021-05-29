import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { cleanSectionsLogout } from '../actions/sections'

const URI = process.env.REACT_APP_API_URL + 'auth/';
const TOKEN = localStorage.getItem('token') || '';

export const startLogin = (email, password) => {

    return async (dispatch) => {
        try {
            const { data: { ok, token, uid, name, } } = await axios.post(URI, { email, password });

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
    const config = {
        headers: {
            'x-token': TOKEN,
        }
    }
    return async (dispatch) => {
        try {
            const { data: { ok, token, uid, name, } } = await axios.get(URI + 'renew', config);
            if (ok) {
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(logIn({
                    uid,
                    name
                }));

                console.log('Token Ok!')
            }
        } catch (error) {
            const { status, data: { msg } } = error.response;
            console.log(status + ' ' + msg);

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

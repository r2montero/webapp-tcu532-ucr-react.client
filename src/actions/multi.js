import Swal from "sweetalert2";
import { request } from "../helpers/requestsHelper";
import { types } from "../types/types";

export const multiStartAddNew = (multi) => {
    return async (dispatch) => {
        try {
            const { ok, multimedia: { _id } } = await request('multimedia', multi, 'post', true);

            if (ok) {
                multi._id = _id;
                dispatch(multiAddNew(multi));
            }

        } catch (error) {
            console.log(error);
        }

    }
};

export const multiSetActive = (multi) => ({
    type: types.multiSetActive,
    payload: multi
});

export const multiStartLoading = () => {
    return async (dispatch) => {
        try {
            const { ok, multimedia, msg } = await request('multimedia');
            if (ok) {
                dispatch(multiLoaded(multimedia));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se cargaron los archivos',
                    text: msg,
                    backdrop: `rgba(65,173,231,0.6)`
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
};

export const multimediaStartUpdate = (multi) => {
    return async (dispatch) => {
        try {
            const { ok, msg } = await request(`multimedia/${multi._id}`, multi, 'put', true);

            if (ok) {
                dispatch(multiUpdated(multi));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo actualizar',
                    text: msg,
                    backdrop: `rgba(65,173,231,0.6)`
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const multiStartDelete = () => {
    return async (dispatch, getState) => {
        const { _id } = getState().multimedia.activeMulti;
        try {
            const { ok, msg } = await request(`multimedia/${_id}`, {}, 'delete', true);

            if (ok) {
                dispatch(multiDeleted());
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo actualizar',
                    text: msg,
                    backdrop: `rgba(65,173,231,0.6)`
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const multiClearActive = () => ({ type: types.multiClearActive });

export const cleanMultiLogout = () => ({ type: types.cleanMultiLogout });

const multiDeleted = () => ({ type: types.multiDeleted });

const multiUpdated = (multi) => ({
    type: types.multiUpdated,
    payload: multi
});

const multiLoaded = (multi) => ({
    type: types.multiLoaded,
    payload: multi,
});

const multiAddNew = (multi) => ({
    type: types.multiAddNew,
    payload: multi
});
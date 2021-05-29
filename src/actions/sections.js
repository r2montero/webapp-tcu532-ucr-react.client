import Swal from "sweetalert2";
import { request } from "../helpers/requestsHelper";
import { types } from "../types/types";

export const sectionStartAddNew = (section) => {
    return async (dispatch) => {
        try {
            const { ok, section: { _id } } = await request('secciones', section, 'post', true);

            if (ok) {
                section._id = _id;
                dispatch(sectionAddNew(section));
            }

        } catch (error) {
            console.log(error);
        }

    }
};

const sectionAddNew = (section) => ({
    type: types.sectionAddNew,
    payload: section
});

export const sectionSetActive = (section) => ({
    type: types.sectionSetActive,
    payload: section
});

export const sectionsStartLoading = () => {
    return async (dispatch) => {
        try {
            const { ok, sections, msg } = await request('secciones', true);
            if (ok) {
                dispatch(sectionsLoaded(sections));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se cargaron los temas',
                    text: msg,
                    backdrop: `rgba(65,173,231,0.6)`
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
};

export const sectionStartUpdate = (section) => {
    return async (dispatch) => {
        try {
            const { ok, msg } = await request(`secciones/${section._id}`, section, 'put', true);

            if (ok) {
                dispatch(sectionUpdated(section));
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
};

export const sectionStartDelete = () => {
    return async (dispatch, getState) => {
        const { _id } = getState().section.activeSection;
        try {
            const { ok, msg } = await request(`secciones/${_id}`, {}, 'delete', true);

            if (ok) {
                dispatch(sectionDeleted());
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

export const sectionClearActive = () => ({ type: types.sectionClearActive });

export const cleanSectionsLogout = () => ({ type: types.cleanSectionsLogout });

const sectionsLoaded = (sections) => ({
    type: types.sectionsLoaded,
    payload: sections,
});

const sectionUpdated = (section) => ({
    type: types.sectionUpdated,
    payload: section
});

const sectionDeleted = () => ({ type: types.sectionDeleted });

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { uiCloseForm } from '../../actions/ui';
import { sectionClearActive, sectionStartAddNew, sectionStartDelete, sectionStartUpdate } from '../../actions/sections';
import Swal from 'sweetalert2';

const initSection = {
    name: '',
    description: '',
    user: '',
};

const initValid = {
    inValid: false,
    message: '',
};

export const SectionFormDialog = () => {

    const { openForm } = useSelector(state => state.sectionsForm);
    const { activeSection } = useSelector(state => state.section);
    const { uid } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(initSection);
    const [validName, setValidName] = useState(initValid);

    const { name, description } = formValues;
    const { inValid, message } = validName;

    useEffect(() => {
        if (activeSection) {
            setFormValues(activeSection);
        }
        else {
            setFormValues(initSection);
        }
    }, [activeSection, setFormValues])

    const handleFormInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
        setValidName(initValid);
    }

    const handleSave = (e) => {
        e.preventDefault();

        if (name.trim().length < 2) {
            setValidName({
                inValid: true,
                message: 'Al menos 2 caracteres'
            });
            return;
        };

        if (activeSection) {
            dispatch(sectionStartUpdate(formValues));
            dispatch(sectionClearActive());
        } else {
            dispatch(sectionStartAddNew({
                ...formValues,
                user: uid,
            }));
        }

        handleClose();
    };

    const handleDelete = () => {
        Swal.fire({
            title: '¿Desea eliminar la sección?',
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(sectionStartDelete());
                Swal.fire(
                    'Eliminado',
                    'La sección se eliminó de la base de datos',
                    'success'
                )
            }
        });

        handleClose();
    }

    const handleClose = () => {
        dispatch(uiCloseForm());
        setFormValues(initSection);
    };

    return (
        <>
            <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSave}>
                    <DialogTitle id="form-dialog-title">Temas</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {(activeSection) ? 'Editar o Eliminar Tema' : 'Crear Nuevo Tema'}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Nombre del tema"
                            type="text"
                            fullWidth
                            onChange={handleFormInputChange}
                            value={name}
                            error={inValid}
                            helperText={message}
                        />
                        <TextField
                            multiline
                            rows='2'
                            margin="dense"
                            id="description"
                            name="description"
                            label="Descripción"
                            type="text"
                            fullWidth
                            onChange={handleFormInputChange}
                            value={description}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" size='small' variant='outlined'>
                            Cancelar
                        </Button>

                        {
                            (activeSection) &&
                            <Button onClick={handleDelete} color="secondary" size='small' variant='outlined'>
                                Eliminar
                            </Button>
                        }

                        <Button type="submit" color="primary" size='small' variant='outlined'>
                            Guardar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
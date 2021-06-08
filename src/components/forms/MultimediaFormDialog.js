import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, FormHelperText, InputLabel, makeStyles, TextareaAutosize } from '@material-ui/core';
import { uiCloseForm } from '../../actions/ui';
import { multimediaStartUpdate, multiStartAddNew, multiClearActive } from '../../actions/multi';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 200,
    },
}));

const initMultimedia = {
    name: '',
    type: '',
    storage_link: '',
    description: '',
    user: '',
};

const initValid = {
    inValid: false,
    message: '',
};

export const MultimediaFormDialog = () => {
    const classes = useStyles();

    const { openForm } = useSelector(state => state.multimediaForm);
    const { activeMulti } = useSelector(state => state.multimedia);
    const { uid } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(initMultimedia);
    const [validName, setValidName] = useState(initValid);
    const [validType, setValidType] = useState(initValid);
    const [validLink, setValidLink] = useState(initValid);

    const { name, type, storage_link, description } = formValues;
    const { inValid: inValidName, message: messageName } = validName;
    const { inValid: inValidType, message: messageType } = validType;
    const { inValid: inValidLink, message: messageLink } = validLink;

    useEffect(() => {
        if (activeMulti) {
            setFormValues(activeMulti);
        }
        else {
            setFormValues(initMultimedia);
        }
    }, [activeMulti, setFormValues])

    const handleFormInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
        setValidName(initValid);
        setValidType(initValid);
        setValidLink(initValid);
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

        if (validator.isEmpty(type)) {
            setValidType({
                inValid: true,
                message: 'Debe seleccionar el tipo de archivo'
            });
            return;
        }

        if (validator.isDataURI(storage_link)) {
            setValidLink({
                inValid: true,
                message: 'El enlace no es valido'
            });
            return;
        }

        if (activeMulti) {
            dispatch(multimediaStartUpdate(formValues));
            dispatch(multiClearActive());
        } else {
            dispatch(multiStartAddNew({
                ...formValues,
                user: uid,
            }));
        }

        handleClose();
    };

    const handleClose = () => {
        dispatch(uiCloseForm());
        setFormValues(initMultimedia);
    };

    return (
        <>
            <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Multimedia</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                            {(activeMultimedia) ? 'Editar o Eliminar Multimedia' : 'Crear Nuevo Multimedia'}
                        </DialogContentText> */}
                    <form className={classes.container} onSubmit={handleSave}>
                        <FormControl required className={classes.formControl}>
                            <TextField
                                autoFocus
                                id="name"
                                name="name"
                                label="Nombre del multimedia"
                                type="text"
                                onChange={handleFormInputChange}
                                value={name}
                                error={inValidName}
                                helperText={messageName}
                            />
                        </FormControl>

                        <FormControl required className={classes.formControl} error={inValidType}>
                            <InputLabel>Seleccione el tipo</InputLabel>
                            <Select
                                native
                                value={type}
                                onChange={handleFormInputChange}
                                name='type'
                                id='type'
                            >
                                <option aria-label="None" value="" />
                                <option value={'Audio'}>Audio</option>
                                <option value={'Documento'}>Documento</option>
                                <option value={'Imágen'}>Imágen</option>
                                <option value={'Infografía'}>Infografía</option>
                                <option value={'Vídeo'}>Vídeo</option>
                                <option value={'Otro'}>Otro</option>
                            </Select>
                            <FormHelperText>{messageType}</FormHelperText>
                        </FormControl>

                        <FormControl required className={classes.formControl}>
                            <TextField
                                id="storage_link"
                                name="storage_link"
                                label="Enlace al archivo"
                                type="text"
                                onChange={handleFormInputChange}
                                value={storage_link}
                                error={inValidLink}
                                helperText={messageLink}
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <TextareaAutosize
                                rowsMin={2}
                                rowsMax={3}
                                id="description"
                                name="description"
                                placeholder="Descripción"
                                type="text"
                                onChange={handleFormInputChange}
                                value={description}
                            />
                        </FormControl>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" size='small' variant='outlined'>
                        Cancelar
                    </Button>

                    <Button onClick={handleSave} color="primary" size='small' variant='outlined'>
                        Guardar
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );
}
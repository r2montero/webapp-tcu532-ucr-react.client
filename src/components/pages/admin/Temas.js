import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import { AddBoxOutlined } from '@material-ui/icons';
import { SectionFormDialog } from '../../forms/SectionFormDialog';
import { uiOpenForm } from '../../../actions/ui';
import { SectionsDataGrid } from '../../items/SectionsDataGrid';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3),
       
    },
    div: {
        paddingLeft: '40px',
    },
}));

export default function Temas() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleOpenForm = () => {
        dispatch(uiOpenForm());
    }

    return (
        <>
            <h2 className='dash-title'>Temas / Secciones</h2>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleOpenForm}
                    startIcon={<AddBoxOutlined />} >Nuevo
            </Button>
            </div>

            <div className={classes.div}>
                <div>
                    <p>
                        Haga click sobre una fila para editarla o eliminarla
                    </p>
                </div>
                <SectionsDataGrid />
            </div>

            <SectionFormDialog />
        </>
    )
}

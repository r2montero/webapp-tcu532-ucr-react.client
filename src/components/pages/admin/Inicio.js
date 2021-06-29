import React, { Component } from "react";
import Temas from '../admin/Temas';
import Config from '../admin/Configuracion';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    temas: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    config:{
        flexGrow: 1,
        paddingTop: '40px', 
        padding: theme.spacing(0, 3),
        paddingBottom: '40px',
    },
}));

export default function Inicio() {
    const classes = useStyles();


    return (

        <>
           
                <Grid className={classes.temas}>
                    <Temas />
                </Grid>
                {/*<Grid className={classes.config}>
                    <Config />
                </Grid>*/}
            
        </>
    );

}

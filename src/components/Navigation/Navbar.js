import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AccountBox, ExitToApp } from '@material-ui/icons';

import { startLogout } from '../../actions/auth';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const { name } = useSelector(state => state.auth);

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Button
            color="inherit"
            href="/dashboard">Inicio
          </Button>

          <Button
            color="inherit"
            href='/dashboard/materiales'>Multimedia
          </Button>

          <Button
            color="inherit"
            href='/dashboard/temas'>Temas
          </Button>

          <Button
            color="inherit"
            href='/dashboard/config'>Configuración
          </Button>

          <Typography
            variant="h6"
            className={classes.title}>
          </Typography>

          <AccountBox />
          <Typography >
          </Typography>

          <Typography
            variant="button"
            className={classes.menuButton}>
            <span> {name}</span>
          </Typography>

          <Button
            onClick={handleLogout}
            color="inherit">
            <ExitToApp /> <span> Salir</span>
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
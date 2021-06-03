import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';



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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Economía Solidaria
          </Typography>
          <Button
            color="inherit"
            href='/'>Inicio
          </Button>
          <Button
            color="inherit"
            href='/multimedia'>Multimedia
          </Button>
          <Button
            color='inherit'
            href='/temas'>
            Temas
          </Button>
          <Button
            color="inherit"
            href='/acerca'>Nosotros
          </Button>
          <Button
            color="inherit"
            href='/dashboard'><BuildIcon fontSize='small' color='disabled' />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
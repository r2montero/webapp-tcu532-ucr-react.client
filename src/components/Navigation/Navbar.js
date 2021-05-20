/*import React, { Component } from "react";
import { Link } from "react-router-dom";
import {IoExitSharp} from 'react-icons/io5';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {" "}
              TCU Economia Solidaria{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/materiales">Materiales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/temas">Temas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Salir <IoExitSharp/></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';



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
          
        <Button color="inherit" href="/">Inicio</Button>
        <Button color="inherit" href='/materiales'>Multimedia</Button>
        <Button color="inherit"  href='/temas'>Temas</Button>
        <Button color="inherit"  href='/config'>Configuración</Button>
          <Typography variant="h6" className={classes.title}>
           
          </Typography>
          <Button color="inherit">Salir</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
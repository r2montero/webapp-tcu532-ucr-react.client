/*import React from 'react';
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
            <span>&nbsp;{name}</span>
          </Typography>

          <Button
            onClick={handleLogout}
            color="inherit">
            <ExitToApp /> <span>&nbsp;Salir</span>
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
*/


import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import BuildIcon from '@material-ui/icons/Build';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { AccountBox, ExitToApp } from '@material-ui/icons';

const headersData = [
  {
    label: "Inicio",
    href: "/dashboard",
  },
  {
    label: "Multimedia",
    href: "/dashboard/materiales",
  },
  {
    label: <BuildIcon fontSize='small' color='disabled' />,
    href: "/dashboard",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {

  const { name } = useSelector(state => state.auth);

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout());
  }

  const { header, logo, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 975
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <Button
          color="inherit"
          href="/dashboard">Inicio
          </Button>

        <Button
          color="inherit"
          href='/dashboard/materiales'>Multimedia
          </Button>

        
        <Typography color="inherit">
          <AccountBox /><span>&nbsp;{name}</span>
        </Typography>

        <Button
          onClick={handleLogout}
          color="inherit">
          <ExitToApp /> <span>&nbsp;Salir</span>
        </Button>

      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Economia Solidaria
    </Typography>
  );


  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
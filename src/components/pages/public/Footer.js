import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Card, CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#7A7A7A",
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    
  },
  root:{
    backgroundColor: "#7A7A7A",
  },
  font:{
    color: '#FFFFFF',
    fontSize: '20px',
  }
}));


function Copyright() {
  return (
    <Typography color='primary' variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        TCU 532. UCR - Sede Occidente
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
     
        <CardContent maxwidth="lg">
          <Typography className={classes.font} variant="h1"  align="center" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.font} variant="subtitle1" align="center"  component="p">
            {description}
          </Typography>
          
          <Typography className={classes.font} variant="body2" align="center" gutterBottom>
            Diseñado por Ricardo Rojas & Edgar Rojas
        </Typography>
        <Copyright />
        </CardContent>
      
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
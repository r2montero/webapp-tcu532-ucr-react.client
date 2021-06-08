import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MultimediaFormDialog } from '../../forms/MultimediaFormDialog';
import { AddBoxOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { uiOpenForm } from '../../../actions/ui';
import { MultimediaGrid } from '../../items/MultimediaGrid';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const MultimediaScreen = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenForm = () => {
    dispatch(uiOpenForm());
  }

  return (
    <>
      <h2 className='dash-title'>Archivos Multimedia</h2>


      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOpenForm}
          startIcon={<AddBoxOutlined />}
        >Agregar Multimedia
        </Button>
      </div>

      <div>
        <MultimediaGrid />
      </div>

      <MultimediaFormDialog />

    </>
  )
}

export default MultimediaScreen
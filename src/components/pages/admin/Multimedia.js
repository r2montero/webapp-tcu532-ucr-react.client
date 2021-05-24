import React from 'react';
import { useGetMulti } from '../../../hooks/useGetMulti';
import { MultimediaCard } from '../../items/MultimediaCard';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const Multimedia = () => {

  const { multimedia, loading } = useGetMulti();

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h2 className='dash-title'>Archivos Multimedia</h2>


      {loading && <CircularProgress />} {/*Cambiarlo por un loading decente */}

      <div>
        <Button className='multiadd-btn' variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpen}>Agregar</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Agregar</h2>
              <p id="transition-modal-description">react-transition-group animates me.</p>
              {/* agregar funcionalidad para agregar */}
            </div>
          </Fade>
        </Modal>
      </div>

      <div className="card-grid" >
        {
          multimedia.map(card => (
            <MultimediaCard
              key={card.id}
              {...card}
            />
          ))
        }
      </div>

    </>
  )
}

export default Multimedia


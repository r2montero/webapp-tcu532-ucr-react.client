import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { editar, eliminar } from '../../helpers/manageMulti';
import audio from '../../assets/imgs/audio.png';
import docs from '../../assets/imgs/docs.png';
import otro from '../../assets/imgs/otro.png';
import video from '../../assets/imgs/video.png';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';





export const MultimediaCard = (multi) => {
  //["Audio", "Documento", "Imagen", "Infografía", "Vídeo", "Otro"]
  let image;
  const description = (!multi.description ? 'Sin descripcion' : multi.description);

  switch (multi.type) {
    case 'Audio':
      image = audio;
      break;
    case 'Documento':
      image = docs;
      break;
    case 'Imagen':
      image = multi.link;
      break;
    case 'Infografía':
      image = multi.link;
      break;

    case 'Vídeo':
      image = video;
      break;
    default:
      image = otro;
      break;
  }

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



    <div className='card-item'>
      <Card>
        <CardImg top width='150px' src={image} alt={multi.name} />
        <CardBody>
          <CardTitle tag="h5">{multi.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{multi.type}</CardSubtitle>
          <CardText>{description}</CardText>
          <div>
            <Button variant="contained" color="primary" startIcon={<LaunchIcon />} href={multi.link} target='_blank' rel="noreferrer">Abrir</Button> {' '}
          </div>
          <div>
            <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={handleOpen}>Editar</Button>
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
                  <h2 id="transition-modal-title">Editar</h2>
                  <p id="transition-modal-description">react-transition-group animates me.</p>
                  /**agregar funcionalidad para editar */
                </div>
              </Fade>
            </Modal>
          </div>
          <div>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={handleOpen}>Eliminar</Button>
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
                  <h2 id="transition-modal-title">Eliminar</h2>
                  <p id="transition-modal-description">react-transition-group animates me.</p>
                  /**agregar funcionalidad para eliminar */
                </div>
              </Fade>
            </Modal>
          </div>

        </CardBody>
      </Card>

    </div>

  );
}


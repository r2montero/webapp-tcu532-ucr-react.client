import React from 'react';
import audio from '../../assets/imgs/audio.png';
import docs from '../../assets/imgs/docs.png';
import otro from '../../assets/imgs/otro.png';
import video from '../../assets/imgs/video.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const cardUseStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9

  },
  cardContent: {
    maxHeight: '100%',
    maxwidth: '100%',
  },
  gridContent: {
    height: '300px',
    width: '300px',
    alignItems: 'center',
  },


}));

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

  const cardClasses = cardUseStyles();


  return (


    <div className='card-item'>
      <Container className={cardClasses.cardGrid}>
        {/* End hero unit */}
        <Grid container spacing={2}>

          <Grid key={multi.id} className={cardClasses.gridContent}>
            <Card className={cardClasses.card}>
              <CardMedia
                className={cardClasses.cardMedia}
                image={image}
                title="Image title"
              />
              <CardContent className={cardClasses.cardContent}>
                <Typography variant="h5">
                  {multi.name}
                </Typography>
                <Typography variant="h6">
                  {multi.type}
                </Typography>
                <Typography variant="body2">
                  {description}
                </Typography>
                <CardActions>
                  <Button size="small" color="primary" href={multi.link} target='_blank' rel="noreferrer">
                    Abrir
                    </Button>
                  <Button size="small" color="primary" target='_blank' rel="noreferrer">
                    Editar
                </Button>

                  <Button size="small" color="primary" >
                    Eliminar
                </Button>

                  <Button size="small" color="primary">
                    test
                    </Button>

                </CardActions>
              </CardContent>

            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>

  );
}


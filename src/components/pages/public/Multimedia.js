import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import audio from '../../../assets/imgs/audio.png';
import docs from '../../../assets/imgs/docs.png';
import otro from '../../../assets/imgs/otro.png';
import video from '../../../assets/imgs/video.png';
import { useDispatch, useSelector } from 'react-redux';
import { multiStartLoading } from '../../../actions/multi';
import '../../../assets/css/multimediaIndex.css'


const useStyles = makeStyles((theme) => ({
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
        height: 'auto',
        width: 'auto',
        alignItems: 'auto',
    },

}));

export default function Multimedia() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { multimedia } = useSelector(state => state.multimedia);

    const [searchTerm, setSearchTerm] = useState('');

    const description = (desc) => {
        if (!desc) {
            return 'Sin descripcion';
        } else {
            return desc;
        }
    }

    const imageToShow = (link, type) => {
        switch (type) {
            case 'Audio':
                return audio;

            case 'Documento':
                return docs;

            case 'Imágen':
                return link;

            case 'Infografía':
                return link;


            case 'Vídeo':
                return video;

            default:
                return otro;

        }
    }

    useEffect(() => {
        dispatch(multiStartLoading());
    }, [dispatch]);



    return (

        <React.Fragment>
            <CssBaseline />
            <div>
                <input type='text' placeholder='Buscar...' onChange={event => { setSearchTerm(event.target.value) }} className='multiInput'/>
            </div>
            <main>
                <Container className={classes.cardGrid} maxwidth="md">

                    <Grid container spacing={2}>
                        {multimedia.filter((item) => {
                            if (searchTerm == '') {
                                return item
                            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return item
                            }
                        }).map((item) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={imageToShow(item.storage_link, item.type)}
                                        title={item.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography>
                                            {description(item.description)}
                                        </Typography>
                                        <Typography>
                                            {item.type}
                                        </Typography>
                                        <Typography>
                                            {item.theme}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href={item.storage_link} target='_blank' rel="noreferrer">
                                            Abrir
                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

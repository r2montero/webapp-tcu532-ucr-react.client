import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { multiSetActive, multiStartDelete, multiStartLoading } from '../../actions/multi';

import audio from '../../assets/imgs/audio.png';
import docs from '../../assets/imgs/docs.png';
import otro from '../../assets/imgs/otro.png';
import video from '../../assets/imgs/video.png';
import { MultimediaFormDialog } from '../forms/MultimediaFormDialog';
import { uiOpenForm } from '../../actions/ui';
import Swal from 'sweetalert2';

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
        flexGrow: 1,
    },
}));


export const MultimediaGrid = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const { multimedia } = useSelector(state => state.multimedia);

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

    const handleEdit = (m) => {
        dispatch(multiSetActive(m));
        dispatch(uiOpenForm());
    }

    const handleDelete = (m) => {
        dispatch(multiSetActive(m));
        Swal.fire({
            title: '¿Desea eliminar el archivo?',
            text: 'Esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(multiStartDelete());
                Swal.fire(
                    'Eliminado',
                    'El archivo multimedia se eliminó de la base de datos',
                    'success'
                )
            }
        });
    }



    return (
        <>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {multimedia.map((m) => (
                        <Grid item key={m._id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={imageToShow(m.storage_link, m.type)}
                                    title={m.name}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        {m.name}
                                    </Typography>
                                    <Typography gutterBottom variant='h6' component='h3'>
                                        {m.type}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {description(m.description)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary' href={m.storage_link} target='_blank'>
                                        Ver
                                    </Button>
                                    <Button onClick={() => handleEdit(m)} size='small' color='primary'>
                                        Editar
                                    </Button>
                                    <Button onClick={() => handleDelete(m)} size='small' color='secondary'>
                                        Borrar
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <MultimediaFormDialog />
        </>
    )
}

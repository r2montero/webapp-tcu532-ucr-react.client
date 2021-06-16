import React from 'react';
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


const multi = [
    {
        _id: "609814764e57a9001513ff59",
        name: "Sabiduria de maestros",
        type: "Infografía",
        storage_link: "https://www.pictoline.com/imgs/2016/10/05/a-5.png",
        createdAt: "2021-05-09T16:57:26.763Z",
        updatedAt: "2021-05-09T16:57:26.763Z",
        theme: 'Economia Solidaria'
    },
    {
        _id: "6098162d4e57a9001513ff5a",
        name: "Apoyo local",
        type: "Infografía",
        storage_link: "https://www.pictoline.com/imgs/2021/01/15/Mu4DwwV9YS3JFLosCNpz4RME8gJScIDaBEhCD0tx.png",
        createdAt: "2021-05-09T17:04:45.670Z",
        updatedAt: "2021-05-09T17:04:45.670Z",
        theme: 'Apoyo Solidario'
    },
    {
        _id: "609816b84e57a9001513ff5b",
        name: "Economia Solidaria",
        type: "Imagen",
        storage_link: "https://www.aciamericas.coop/IMG/arton8070.png",
        createdAt: "2021-05-09T17:07:04.023Z",
        updatedAt: "2021-05-09T17:07:04.023Z"
    },
    {
        _id: "6098172b4e57a9001513ff5c",
        name: "Cooperativismo",
        type: "Vídeo",
        storage_link: "https://youtu.be/RjysaZ_ua54",
        createdAt: "2021-05-09T17:08:59.171Z",
        updatedAt: "2021-05-09T17:08:59.171Z"
    },
    {
        _id: "6098177d4e57a9001513ff5d",
        name: "COVID-19",
        type: "Vídeo",
        storage_link: "https://youtu.be/wLzrtzVOoJg",
        createdAt: "2021-05-09T17:10:21.194Z",
        updatedAt: "2021-05-09T17:10:21.194Z"
    },
    {
        _id: "609817ce4e57a9001513ff5e",
        name: "Educacion Cooperativa",
        type: "Vídeo",
        storage_link: "https://youtu.be/wLzrtzVOoJg",
        description: 'esto es una descripcion muy muy larga a ver como se acomoda esta vara',
        createdAt: "2021-05-09T17:11:42.990Z",
        updatedAt: "2021-05-09T17:11:42.990Z"
    },
    {
        _id: "6098263a4e57a9001513ff5f",
        name: "Sede Occidente",
        type: "Imagen",
        storage_link: "https://yt3.ggpht.com/ytc/AAUvwnhTLLIgyvhblwIxnhNSl_s0to_B5RbKi_yKa_cN=s900-c-k-c0x00ffffff-no-rj",
        description: "Logo de la sede occidente",
        createdAt: "2021-05-09T18:13:14.073Z",
        updatedAt: "2021-05-09T18:13:14.073Z"
    }
]

export default function Multimedia() {
    const classes = useStyles();

    let image;
    //const description = (!multi.description ? 'Sin descripcion' : multi.description);

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



    return (

        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxwidth="md">

                    <Grid container spacing={2}>
                        {multi.map((item) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={item.storage_link}
                                        title={item.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography>
                                            {item.description}
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

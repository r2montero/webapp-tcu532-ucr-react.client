import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//         </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));


const Aboutus = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxwidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Acerca de Nosotros
          </Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a congue mi, vel condimentum massa. Etiam lacus justo, mollis vitae lectus id, consectetur dignissim leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus lectus, venenatis sed ex sit amet, commodo viverra arcu. Maecenas tincidunt interdum sollicitudin. Sed at aliquet leo. Phasellus eget hendrerit lorem, quis sodales turpis. Nullam venenatis odio et magna ultrices facilisis. Curabitur id maximus tortor, rutrum dignissim odio. Integer eu diam ex. Integer a mauris at ante facilisis tristique ut sed mi. Phasellus luctus ex urna, in dictum arcu dictum id. Vestibulum volutpat ex vitae accumsan blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In cursus, nibh id aliquet facilisis, massa libero ultrices ligula, at molestie arcu massa vestibulum sapien. Pellentesque fermentum, nisl vitae blandit posuere, nisl nulla volutpat purus, ac egestas nibh ligula vitae nibh.

                Ut sem risus, vehicula eu justo id, eleifend tincidunt nisi. Etiam nibh risus, gravida vel augue ut, ultricies gravida orci. Nullam a imperdiet purus. Etiam mollis in libero sed facilisis. Donec vel sodales sem, quis luctus enim. Pellentesque magna ligula, faucibus eget dictum a, congue a sapien. Nam volutpat nisi a neque feugiat ornare a eget eros. Fusce ultricies, nulla a consectetur tincidunt, arcu ex vulputate est, rutrum rhoncus ligula sapien sit amet leo. Etiam viverra eleifend porta. Praesent vulputate eu nisl sed viverra. Curabitur nec purus ultricies, vulputate dolor sit amet, feugiat massa. Nunc fringilla, justo vitae hendrerit sagittis, felis ligula porttitor mauris, eget cursus lectus magna eu ligula. Nunc aliquam risus libero, et bibendum dui porttitor mollis. Vestibulum et erat scelerisque, scelerisque neque non, aliquam est.

                Sed tincidunt velit nec aliquam vestibulum. Nulla euismod in dui vitae scelerisque. Donec porttitor diam id justo tristique dignissim. Quisque porttitor, diam eget bibendum tristique, velit diam ultrices leo, vitae mattis sapien purus sollicitudin tellus. Donec auctor, leo ac consequat ornare, augue felis finibus lorem, eget sagittis risus nunc non libero. Etiam pharetra arcu eget lacus ultricies, id sollicitudin massa pulvinar. Nunc viverra orci velit, quis molestie nunc sodales et. Nunc at turpis consectetur, vulputate nisl ac, egestas neque. Vestibulum lacus velit, consectetur vel libero a, feugiat molestie turpis. Morbi arcu enim, efficitur quis purus vitae, vestibulum gravida purus. Curabitur rutrum massa lacus, eu consectetur nisl tempor non. Pellentesque accumsan dui vitae diam mattis, ac vulputate ante molestie. Nulla tincidunt ultrices nisl eget auctor.

Cras et nunc vitae nisl varius finibus vitae et orci. Cras ornare elementum risus, vitae scelerisque nulla scelerisque ac. Fusce vulputate metus tellus, at gravida nulla consectetur nec. Vestibulum erat diam, aliquet non feugiat in, molestie in magna. Cras laoreet mattis ligula, non finibus massa mollis id. Vivamus consequat justo in bibendum viverra. In hac habitasse platea dictumst. In nec magna pretium, rutrum quam sit amet, feugiat velit. Cras pharetra, nulla nec pellentesque placerat, nulla quam suscipit lacus, id pulvinar turpis nisi a dui. Quisque vitae neque dignissim, sagittis ante sit amet, eleifend nibh. Nulla feugiat enim id gravida pellentesque. Vivamus gravida sem sed odio molestie vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean et elit non risus mattis viverra eget non nisi.</Typography>
            </Container>

        </div>
    );
}
export default Aboutus
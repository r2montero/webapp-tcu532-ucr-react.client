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

    return (
        
        <div className='card-item'>
            <Card>
                <CardImg top width='150px' src={image} alt={multi.name} />
                <CardBody>
                    <CardTitle tag="h5">{multi.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{multi.type}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button variant="contained" color="primary" startIcon={<LaunchIcon />} href={multi.link} target='_blank' rel="noreferrer">Abrir</Button> {' '}
                    <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={editar}>Editar</Button>{' '}
                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={eliminar}>Eliminar</Button>
                </CardBody>
            </Card>
            
        </div>
        
    );
}


import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { editar, eliminar } from '../../helpers/manageMulti';
import audio from '../../assets/imgs/audio.png';
import docs from '../../assets/imgs/docs.png';
import otro from '../../assets/imgs/otro.png';
import video from '../../assets/imgs/video.png';

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
                    <Button color="link" href={multi.link} target='_blank' rel="noreferrer">Abrir</Button> {' '}
                    <Button outline color="primary" onClick={editar}>Editar</Button>{' '}
                    <Button outline color="danger" onClick={eliminar}>Eliminar</Button>
                </CardBody>
            </Card>
            
        </div>
    );
}

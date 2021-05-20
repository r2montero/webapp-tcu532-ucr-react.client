import React from 'react';
import { agregar } from '../../helpers/manageMulti';
import { useGetMulti } from '../../hooks/useGetMulti';
import { MultimediaCard } from '../items/MultimediaCard';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));


const Multimedia = () => {

    const { multimedia, loading } = useGetMulti();
    const classes = useStyles();

    return (
        <>
            <h2 className='dash-title'>Archivos Multimedia</h2>
           
                
            {loading && <CircularProgress /> && <p>Cargando...</p>} {/*Cambiarlo por un loading decente */}

            <Button className='multiadd-btn' variant="contained" color="primary" startIcon={<AddIcon />} onClick={agregar}>Agregar</Button>
            
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


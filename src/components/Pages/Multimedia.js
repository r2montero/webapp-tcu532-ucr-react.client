import React from 'react';
import { Button } from 'reactstrap';
import { agregar } from '../../helpers/manageMulti';
import { useGetMulti } from '../../hooks/useGetMulti';
import { MultimediaCard } from '../items/MultimediaCard';


const Multimedia = () => {

    const { multimedia, loading } = useGetMulti();

    return (
        <>
            <h2 className='dash-title'>Archivos Multimedia</h2>
            <Button onClick={agregar} color="success">Agregar</Button>
                
            {loading && <p>Cargando...</p>} {/*Cambiarlo por un loading decente */}

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

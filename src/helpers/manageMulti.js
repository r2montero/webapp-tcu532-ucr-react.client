import axios from 'axios';
import env from "react-dotenv";

const URI = env.API_URL + 'multimedia/';

console.log(URI);

export const getAllMultimedia = async () => {
    try {
        const { data } = await axios.get(URI);

        const multimedia = data.map(m => {
            return {
                id: m._id,
                name: m.name,
                type: m.type,
                link: m.storage_link,
                description: m.description,
                autor: m.autor
            }
        });

        return multimedia;
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            msg: 'No se pudieron obtener los datos',
            error
        }
    }
}

export const agregar = () => {
    
}

export const editar = (id) => {
    
}

export const eliminar = (id) => {
    
}
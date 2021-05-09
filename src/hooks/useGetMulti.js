import { useEffect, useState } from "react"
import { getAllMultimedia } from "../helpers/manageMulti";


export const useGetMulti = () => {
    const [multi, setMulti] = useState({
        multimedia: [],
        loading: true,
    }); 

    useEffect(() => {
        getAllMultimedia()
        .then(multimedia => {
            console.log(multimedia);
            setMulti({
                multimedia,
                loading: false
            });
        });
    }, []);

    return multi;
}

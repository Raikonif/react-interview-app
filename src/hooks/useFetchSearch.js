import { useState, useEffect } from 'react'
import { getSearch } from '../helpers/getSearch';


export const useFetchSearch = ( search ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getSearch( search )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [search])




    return state; // { data:[], loading: true };


}



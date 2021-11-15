import React from 'react';
import { useFetchSearch } from '../hooks/useFetchSearch';
import { SearchGridItem } from './SearchGridItem';

export const SearchGrid = ({ search }) => {

    const { data:images, loading } = useFetchSearch( search );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { search } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( datas => (
                        <SearchGridItem 
                            key={ datas.id }
                            { ...datas }
                        />
                    ))
                }
            
            </div>
        </>
    )
}

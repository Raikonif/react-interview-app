import React, { useState } from 'react'
import { AddSearch } from './components/AddSearch';
import { SearchGrid } from './components/SearchGrid';

export const SearchApp = () => {
    
    const [search, setSearch] = useState(['nit', 'name_reference']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddSearch setSearch={ setSearch } />
            <hr />

            <ol>
                {
                    search.map( search  => (
                        <SearchGrid 
                            key={ search }
                            search={ search }
                        />
                    ))
                }
            </ol>

        </>
    )
}

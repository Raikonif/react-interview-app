import React from 'react'

export const SearchGridItem = ({ id, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ id } />
            <p> { id } </p>
        </div>
    )
}

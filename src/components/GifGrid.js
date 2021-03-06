import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // data:images otro tipo de desestructuracion
    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className=' animate__animated animate__fadeIn'> { category } </h3>
            {/* Metodo corto de operador ternario, este no evalua la segunda condicion */}
            { loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}

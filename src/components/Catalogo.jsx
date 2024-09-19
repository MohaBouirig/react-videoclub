import React, { useContext } from 'react';
import PeliculaContext from './PeliculaContext';
import PeliculaCard from './PeliculaCard';

const Catalog = () => {
    const { peliculas } = useContext(PeliculaContext);

    return (
        <div className="container my-5">
            <h1 className="mb-4 text-center">Catálogo de Películas</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {peliculas.map((pelicula) => (
                <div className="col" key={pelicula.id}>
                    <PeliculaCard pelicula={pelicula} />
                </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
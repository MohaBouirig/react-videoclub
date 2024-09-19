import React from 'react';
import { useNavigate } from 'react-router-dom';

const PeliculaCard = ({ pelicula }) => {
  const navigate = useNavigate();

  const handleVerDetalle = () => {
    console.log('Película seleccionada:', pelicula);
    navigate(`/pelicula/${pelicula.id}`);
  };

  return (
    <>
    <div className="card h-100">
      <img src={pelicula.poster} className="card-img-top" alt={pelicula.title} />
      <div className="card-body">
        <h5 className="card-title">{pelicula.title}</h5>
        <button className="btn btn-primary" onClick={handleVerDetalle}>Ver Detalles</button>
      </div>
    </div>
    </>
  );
};

export default PeliculaCard;
import React, { useContext } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import  PeliculaContext  from './PeliculaContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PeliculaDetall = () => {
  const { id } = useParams();
  const { peliculas, setPeliculas} = useContext(PeliculaContext);
  const pelicula = peliculas.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleAlquilar = () => {
    // Actualizar el estado de la pelicula a "alquilada"
    const updatedPeliculas = peliculas.map((p) =>
      p.id === pelicula.id ? { ...p, rented: true } : p
    );
    setPeliculas(updatedPeliculas);
    toast.success('Pelicula alquilada', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDevolver = () => {
    // Actualizar el estado de la pelicula a "devuelta"
    const updatedPeliculas = peliculas.map((p) =>
      p.id === pelicula.id ? { ...p, rented: false } : p
    );
    setPeliculas(updatedPeliculas);
    toast.success('Pelicula devuelta', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleModificar = () => {
    navigate(`/modificar/${pelicula.id}`);
  };

  const handleEliminar = () => {
    // Eliminar la pelicula del contexto y de la lista de peliculas
    const updatedPeliculas = peliculas.filter((p) => p.id !== pelicula.id);
    setPeliculas(updatedPeliculas);
    toast.success('Película eliminada', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/peliculas'); // Redirigir al usuario al catalogo de peliculas
  };
  

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pelicula.poster} alt={pelicula.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{pelicula.title}</h1>
          <p>Director: {pelicula.director}</p>
          <p>Año: {pelicula.year}</p>
          <p>Resumen: {pelicula.synopsis}</p>
          <div className="d-grid gap-2 d-md-block">
          {pelicula.rented ? (
              <button className="btn btn-warning" onClick={handleDevolver}>
                Devolver
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleAlquilar}>
                Alquilar
              </button>
            )}
            <button className="btn btn-success" onClick={handleModificar}>Modificar</button>
            <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeliculaDetall;
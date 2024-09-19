import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PeliculaContext  from './PeliculaContext';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModificarPelicula = () => {
  const { id } = useParams();
  const { peliculas, setPeliculas } = useContext(PeliculaContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  const guardarPeli = (data) => {
    const updatedPelicula = {
      id: pelicula.id,
      ...data,
      rented: pelicula.rented,
    };
    const updatedPeliculas = peliculas.map((p) =>
      p.id === pelicula.id ? updatedPelicula : p
    );
    setPeliculas(updatedPeliculas);
    toast.success('Pelicula modificada', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/peliculas');
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Modificar Película</h1>
      <form onSubmit={handleSubmit(guardarPeli)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            defaultValue={pelicula.title}
            {...register('title', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Año
          </label>
          <input
            type="text"
            className="form-control"
            id="year"
            defaultValue={pelicula.year}
            {...register('year', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <input
            type="text"
            className="form-control"
            id="director"
            defaultValue={pelicula.director}
            {...register('director', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="poster" className="form-label">
            URL del Póster
          </label>
          <input
            type="text"
            className="form-control"
            id="poster"
            defaultValue={pelicula.poster}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="synopsis" className="form-label">
            Sinopsis
          </label>
          <textarea
            className="form-control"
            id="synopsis"
            defaultValue={pelicula.synopsis}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default ModificarPelicula;

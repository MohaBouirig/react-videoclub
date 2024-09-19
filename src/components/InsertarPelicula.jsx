import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PeliculaContext from './PeliculaContext';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InsertarPelicula = () => {
    const { peliculas, setPeliculas } = useContext(PeliculaContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
  
    const guardarPeli = (data) => {
        const nuevaPelicula = {
          id: peliculas.length + 1,
          ...data,
          rented: false,
        };
        setPeliculas([...peliculas, nuevaPelicula]);
        toast.success('Pelicula insertada', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
        navigate('/peliculas');
      };
    
      return (
        <div className="container my-5">
          <h1 className="mb-4 text-center">Insertar Nueva Película</h1>
          <form onSubmit={handleSubmit(guardarPeli)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="synopsis" className="form-label">
                Sinopsis
              </label>
              <textarea
                className="form-control"
                id="synopsis"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Insertar Película
            </button>
          </form>
        </div>
      );
    };
    
    export default InsertarPelicula;
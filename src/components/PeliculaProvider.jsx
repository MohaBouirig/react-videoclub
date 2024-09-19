import React, { useState, useEffect } from 'react';
import PeliculaContext from '../components/PeliculaContext';
import { rebreInformacio, obtenerPeliculas } from '../helpers/fetchData.js';

const PeliculaProvider = ({ children }) => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await rebreInformacio();
                setPeliculas(data);
            } catch (error) {
                console.error('Error al obtener peliculas:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <PeliculaContext.Provider value={{ peliculas, setPeliculas }}>
            {children}
        </PeliculaContext.Provider>
    );
};

export default PeliculaProvider;

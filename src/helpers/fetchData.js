import data from "../datos/datos.json";

export const rebreInformacio = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1500);
    });
};

export const obtenerPeliculas = async () => {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de peliculas');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener peliculas:', error);
    }
};

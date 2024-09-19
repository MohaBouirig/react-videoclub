import React from 'react';

const Nosotros = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Sobre Nosotros</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p>
            Bienvenidos a nuestro catálogo de películas, un proyecto realizado como parte de la asignatura M06 UF2.
          </p>
          <p>
            Este proyecto ha sido desarrollado por Mohamed Bouirig, con el objetivo de crear una plataforma en la que los usuarios puedan visualizar, insertar y modificar información sobre diferentes películas.
          </p>
          <p>
            Para la creación de esta aplicación, se ha utilizado la biblioteca de JavaScript React, junto con Bootstrap para el diseño y la interfaz de usuario. Esperamos que disfrutes navegando por nuestro catálogo y que encuentres la información que buscas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
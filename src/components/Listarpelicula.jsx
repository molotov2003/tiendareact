import React, { useState, useEffect } from "react";

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  //metodo que lee el local storage
  const leerLS = () => {
    let datos = JSON.parse(localStorage.getItem("pelicula"));
    setPeliculas(datos);
    //console.log(datos);
  };

  //metodo de autocarga inicial del componente
  useEffect(() => {
    leerLS();
  }, []);

  //metodo render del componente
  return (
    <>
      {peliculas.map((pelicula) => {
        return (
          <div  className="card mt-5 " style={{width: "25%"}}>
            <img src="img/peli4.jpeg" className="" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">{pelicula.titulo}</h5>
              <p className="card-text">{pelicula.descripcion}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListarPeliculas;



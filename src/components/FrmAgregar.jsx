import React, { useState } from "react";

const FrmAgregar = () => {
  const [datos, setDatos] = useState({}); // objeto y metodo de inicializacion para tomar los datos del form

  //Metodo que almacenara las pelis en el localstorage

  const salvarLocal = (valoresFrm) => {
    //leemos la informacion del localstorage
    let elementos = JSON.parse(localStorage.getItem("pelicula"));
    //agregamos al localstorage
    if (Array.isArray(elementos)) {
      elementos.push(valoresFrm); //verifica que sea  un arreglo y agrega un elemento al final
    } else {
      elementos = [valoresFrm]; //crea el arreglo local por primera vez
    }
    localStorage.setItem("pelicula", JSON.stringify(elementos));
  };

  // Metodo obtiene la data del form, crea un objeto y setea el estado del componente
  const getDatosFrm = (e) => {
    e.preventDefault(); // para evitar la recarga automatica del form
    let titulo = e.target.titulo;
    let descripcion = e.target.descripcion;
    let valoresFrm = {
      id: new Date().getTime(), //truco para crear un id randomico
      titulo: titulo.value,
      descripcion: descripcion.value,
    };
    setDatos(valoresFrm);
    salvarLocal(valoresFrm);
  };

  //render del modulo
  return (
    <>
      <form onSubmit={getDatosFrm}>
        <span class="h4 text-uppercase text-primary bg-dark px-2">Agregar</span>
        <span class="h4 text-uppercase text-dark bg-primary px-2 ml-n1">
          pelicula
        </span>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Titulo
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Titulo"
             class="form-control"
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Descripcion
          </label>
          <input
            type="descripcion"
            name="descripcion"
            placeholder="Descripcion"
            class="form-control"
            id="descripcion"
          />
        </div>
        <button type="submit" id="save" value="Guardar" class="btn btn-warning">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FrmAgregar;

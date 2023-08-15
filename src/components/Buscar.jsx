import React, { useState } from "react";
const Buscar = () => {
  const [busqueda, setBusqueda] = useState("");

  const buscarPelicula = (e) => {
    let busqueda = e.target.value;
    console.log(busqueda);
    setBusqueda(busqueda);
  };

  //render del component
  return (
    <>
      <div className="col-lg-4 col-6 text-left">
        <form action="">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              name="busqueda"
              onChange={buscarPelicula}
              className="form-control"
              placeholder="Buscar pelicula"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
              <p><i class="bi bi-search"></i></p>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Buscar;

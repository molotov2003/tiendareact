import Buscar from "./components/Buscar";
import FrmAgregar from "./components/FrmAgregar";
import ListarPeliculas from "./components/Listarpelicula";

function App() {
  return (
    <>
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <a href="www.facebook.com" className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              Nefli
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              soft
            </span>
          </a>
        </div>

        <Buscar />
      </div>

      <div className="container-fluid mb-3">
        <div className="row px-xl-8">
          <div className="col-lg-8">
            <div id="" className="mb-30 mb-lg-8">
              <div>
                <img
                  className="position-absolute w-100 h-100 my-2 mr-6"
                  src="img/portada.jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 py-5 ml-3">
            <div>
              <FrmAgregar />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mx-auto My-auto">
        <a
          href="https://getbootstrap.com/docs/5.3/examples/"
          className="text-decoration-none"
        >
          <span className="h1 text-uppercase text-primary bg-dark px-2">
            Categorias
          </span>
        </a>
      </div>

      <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <i class="bi bi-arrow-through-heart-fill"></i>
              <h5 class="font-weight-semi-bold m-0">Romance</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h5 class="font-weight-semi-bold m-0">Terror</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h5 class="font-weight-semi-bold m-0">Aventura</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              class="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h5 class="font-weight-semi-bold m-0">Accion</h5>
            </div>
          </div>
        </div>
      </div>

      <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span class="bg-secondary pr-3">Peliculas</span>
      </h2>

      <div className="container-fluid">
        <div class="row  ml-4 mr-0">
          <ListarPeliculas />
        </div>
      </div>

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          <a
            className="text-dark"
            href="https://getbootstrap.com/docs/5.3/examples/"
          >
            neflisoft
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

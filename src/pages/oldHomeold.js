import pasteleracherry from "../assets/img/pasteleracherry.jpg";
import pastelero from "../assets/img/pastelero-1jpg.webp";
import pistacho from "../assets/img/pistacho.jpg";
import dchocolate from "../assets/img/haz dulces de chocolate.jpg";
import pchocolate from "../assets/img/haz un pastel de chocolate.jpg";
import plimon from "../assets/img/haz un pie de limon.jpg";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Mi App</title>
        <meta name="description" content="Página principal de mi app" />
      </Helmet>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="imgCarrusel rounded mx-auto d-block img-fluid"
              src={pasteleracherry}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="imgCarrusel rounded mx-auto d-block img-fluid"
              src={pastelero}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="imgCarrusel rounded mx-auto d-block img-fluid"
              src={pistacho}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 className="pastel-navbar">Nuestros Productos</h1>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img className="logo" src={dchocolate} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Bombones de chocolate</h5>
                      <p className="card-text"> Valor: 1.500(1kl)</p>
                      <button className="btn button" type="button">
                        Añadir
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img className="logo" src={pchocolate} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Pastel de chocolate</h5>
                      <p className="card-text"> Valor: 20.000</p>
                      <button className="btn button" type="button">
                        Añadir
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img className="logo" src={plimon} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Pie de limon</h5>
                      <p className="card-text"> Valor: 18.000</p>
                      <button className="btn button" type="button">
                        Añadir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

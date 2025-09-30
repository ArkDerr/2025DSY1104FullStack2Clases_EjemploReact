import pasteleracherry from "../assets/img/pasteleracherry.jpg";
import pastelero from "../assets/img/pastelero-1jpg.webp";
import pistacho from "../assets/img/pistacho.jpg";
import dchocolate from "../assets/img/haz dulces de chocolate.jpg";
import pchocolate from "../assets/img/haz un pastel de chocolate.jpg";
import plimon from "../assets/img/haz un pie de limon.jpg";

export default function Home() {
  const productos = [
    {
      id: 1,
      titulo: "Bombones de chocolate",
      precio: "1.500 (1kg)",
      imagen: dchocolate,
    },
    {
      id: 2,
      titulo: "Pastel de chocolate",
      precio: "20.000",
      imagen: pchocolate,
    },
    {
      id: 3,
      titulo: "Pie de limón",
      precio: "18.000",
      imagen: plimon,
    },
    {
      id: 4,
      titulo: "Pie de limón 2",
      precio: "20.000",
      imagen: plimon,
    },
  ];

  return (
    <div>
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
                {productos.map((prod) => (
                  <div className="col-12 col-sm-6 col-md-4 mb-4" key={prod.id}>
                    {/* col-12 col-sm-6 col-md-4 → En móviles (col-12): ocupa todo el ancho.
                    En tablets (col-sm-6): ocupa la mitad (2 por fila). En escritorio
                    (col-md-4): ocupa 1/3 (3 por fila). mb-4 → da un margen inferior
                    para separar las filas. h-100 → hace que todas las cards de una fila
                    tengan la misma altura. */}
                    <div className="card h-100">
                      <img
                        className="card-img-top"
                        src={prod.imagen}
                        alt={prod.titulo}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{prod.titulo}</h5>
                        <p className="card-text">Valor: {prod.precio}</p>
                        <button className="btn btn-primary" type="button">
                          Añadir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

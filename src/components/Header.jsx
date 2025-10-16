import React from "react";
import { Link } from "react-router-dom";
import logopasteleria from "../assets/img/logopasteleria.png";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg pastel-navbar">
        <div className="container-fluid">
          <img className="logo" src={logopasteleria} alt="Logo Pastelería" />
          <a className="navbar-brand ms-3" href="#">
            Pastelería Mil Sabores
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header"
            aria-controls="header"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="header">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-decoration-none">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/noticias" className="nav-link text-decoration-none">
                  Blogs y Noticias
                </Link>
              </li>

              <li className="nav-item">
                <a
                  id="txtrecetas"
                  className="nav-link text-decoration-none"
                  href="perfil-usuario.html"
                >
                  Perfil
                </a>
              </li>

              <li className="nav-item">
                <a
                  id="txtconsejos"
                  className="nav-link text-decoration-none"
                  href="#"
                >
                  Consejos
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  id="txtmenu"
                  className="nav-link dropdown-toggle text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()} // evita navegación
                >
                  Menú
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/menu/pasteles">
                      Pasteles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/galletas">
                      Galletas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/dulces">
                      Dulces
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin">
                      Administrador
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
              />
              <button className="btn btn-buscar" type="submit">
                Buscar
              </button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Mostrar Login y Registrarse si no está logueado */}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-decoration-none">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      id="txtregistro"
                      className="nav-link text-decoration-none"
                      href="registro.html"
                    >
                      Registrarse
                    </a>
                  </li>
                </>
              )}

              {/* mostrar "Salir" cuando está logueado */}
              {isAuthenticated && (
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-decoration-none"
                    id="txtsalir"
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                  >
                    Salir
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

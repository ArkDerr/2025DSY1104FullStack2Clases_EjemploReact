// src/pages/Login.jsx
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorInline, setErrorInline] = useState("");

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  const mostrarModalError = () => {
    const modalEl = document.getElementById("loginError");
    if (modalEl && window.bootstrap && window.bootstrap.Modal) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    } else {
      // fallback ya se maneja con errorInline
    }
  };

  const manejarLogin = async () => {
    setErrorInline("");

    const res = await login(correo.trim(), contrasena);

    if (res.ok) {
      navigate("/", { replace: true });
    } else {
      setErrorInline(res.message || "Usuario o contraseña incorrecta");
      mostrarModalError();
    }
  };

  const manejarEnter = (e) => {
    if (e.key === "Enter") {
      manejarLogin();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Página Login" />
      </Helmet>

      <main
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="w-50 w-md-25 text-center" style={{ maxWidth: 420 }}>
          <h2>Inicio de sesión</h2>

          <div className="mb-3 text-start">
            <label htmlFor="correo" className="form-label">
              Correo:
            </label>
            <input
              type="email"
              name="correo"
              id="correo"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              onKeyDown={manejarEnter}
              autoComplete="email"
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="contrasena" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              name="contrasena"
              id="contrasena"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              onKeyDown={manejarEnter}
              autoComplete="current-password"
            />
          </div>

          {errorInline && (
            <div className="alert alert-danger py-2" role="alert">
              {errorInline}
            </div>
          )}

          <div className="mb-3">
            <button
              id="btnLogin"
              className="btn button"
              type="button"
              onClick={manejarLogin}
            >
              Login
            </button>
          </div>

          {/* ya no mostramos demo de admin fijo */}
        </div>
      </main>

      <div
        className="modal fade"
        id="loginError"
        tabIndex={-1}
        aria-labelledby="loginErrorLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginErrorLabel">
                Error
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <p>{errorInline || "Usuario o contraseña incorrecta"}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

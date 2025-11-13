import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../auth/AuthContext";

export default function Perfil() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Si no esta logeado
  if (!isAuthenticated || !user) {
    return null;
  }

  const rolMap = {
    1: "Administrador",
    2: "Usuario",
    3: "Vendedor",
    4: "Bodeguero",
  };

  const rolTexto = rolMap[user.idrol] || `Rol ${user.idrol ?? "-"}`;

  return (
    <div className="container my-4">
      <Helmet>
        <title>Mi Perfil</title>
        <meta name="description" content="Perfil de usuario" />
      </Helmet>

      <h2 className="mb-4">Mi Perfil</h2>

      <div className="card" style={{ maxWidth: 480 }}>
        <div className="card-body">
          <h5 className="card-title mb-3">{user.nombre || "Usuario"}</h5>

          <div className="mb-2">
            <strong>RUT:</strong> <span>{user.rut || "-"}</span>
          </div>

          <div className="mb-2">
            <strong>Correo:</strong> <span>{user.mail || "-"}</span>
          </div>

          <div className="mb-2">
            <strong>Rol:</strong> <span>{rolTexto}</span>
          </div>

          {user.idfirebase && (
            <div className="mb-2">
              <strong>ID Firebase:</strong> <span>{user.idfirebase}</span>
            </div>
          )}

          <p className="text-muted mt-3 mb-0" style={{ fontSize: "0.9rem" }}>
            Datos obtenidos desde el microservicio de usuarios.
          </p>
        </div>
      </div>
    </div>
  );
}

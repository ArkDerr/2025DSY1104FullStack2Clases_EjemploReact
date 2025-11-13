import { useState } from "react";
import { registerUsuario } from "../api/usuarioService";

const Registro = () => {
  const [formData, setFormData] = useState({
    rut: "",
    nombre: "",
    mail: "",
    password: "",
    confirmPassword: ""
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setMensaje("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      const msg = await registerUsuario({
        rut: formData.rut,
        nombre: formData.nombre,
        mail: formData.mail,
        password: formData.password
      });

      setMensaje(msg);
      setFormData({
        rut: "",
        nombre: "",
        mail: "",
        password: "",
        confirmPassword: ""
      });

    } catch (err) {
      console.error("Error en registro:", err);
        if (err.response) {
            // El servidor respondió con un código 4xx / 5xx
            setError(err.response.data || "Error en el servidor.");
        } else if (err.request) {
            // La petición salió pero no hubo respuesta (CORS, caída, etc.)
            setError("No se recibió respuesta del servidor (posible CORS o caída del servicio).");
        } else {
            // Error al preparar la petición
            setError("Error al preparar la solicitud: " + err.message);
        }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400, margin: "auto", paddingTop: 40 }}>
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rut"
          className="form-control mb-2"
          placeholder="RUT"
          value={formData.rut}
          onChange={handleChange}
        />

        <input
          type="text"
          name="nombre"
          className="form-control mb-2"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        <input
          type="email"
          name="mail"
          className="form-control mb-2"
          placeholder="Correo"
          value={formData.mail}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          className="form-control mb-2"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-danger">{error}</p>}
        {mensaje && <p className="text-success">{mensaje}</p>}

        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default Registro;

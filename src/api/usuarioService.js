import axiosClient from "./axiosClient";

export const registerUsuario = async ({ rut, nombre, mail, password }) => {
  const payload = {
    rut,
    nombre,
    mail,
    password,
    idrol: 2   // usuarios web SIEMPRE idrol 2
  };

  const response = await axiosClient.post("/Usuarios", payload);
  return response.data;
};

export const loginUsuario = async ({ mail, password }) => {
  const response = await axiosClient.post("/Usuarios/login", {
    mail,
    password,
  });
  // El backend retorna el objeto Usuario
  return response.data;
};
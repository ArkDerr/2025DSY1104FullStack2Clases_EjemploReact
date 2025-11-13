export class Usuario {
  constructor({ rut, nombre, mail, password, idrol = 2 }) {
    this.rut = rut;
    this.nombre = nombre;
    this.mail = mail;
    this.password = password;
    this.idrol = idrol;
  }
}

export class Estudiante{

  id: number;
  nombre: string;
  identificacion: number;
  login: string;
  correo: string;
  contrasena : string

  constructor(id:number,
    nombre: string,
    identificacion: number,
    login: string,
    correo: string,
    contrasena: string,

    ){
      this.id =id;
      this.nombre = nombre;
      this.identificacion = identificacion;
      this.login = login;
      this.correo = correo;
      this.contrasena = contrasena;

    }
}

export class Profesor{
  id:number;
  nombre: string;
  identificacion: number;
  login: string;
  contrasena: string;
  informacionAcademica: string;
  canalYoutube: string;


constructor(id:number,
  nombre: string,
  identificacion: number,
  login: string,
  contrasena: string,
  informacionAcademica: string,
  canalYoutube: string
  ){
    this.id =id;
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.login = login;
    this.contrasena = contrasena;
    this.informacionAcademica = informacionAcademica;
    this.canalYoutube = canalYoutube;
  }
}

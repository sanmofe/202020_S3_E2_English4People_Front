import { Idioma} from '../idioma/idioma';


export class Profesor{
  id:number;
  nombre: string;
  identificacion: number;
  login: string;
  correo: string;
  contrasena: string;
  informacionAcademica: string;
  canalYoutube: string;
  idioma: Idioma;


constructor(id:number,
  nombre: string,
  identificacion: number,
  login: string,
  correo: string,
  contrasena: string,
  informacionAcademica: string,
  canalYoutube: string,
  idioma : Idioma
  ){
    this.id =id;
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.login = login;
    this.correo = correo;
    this.contrasena = contrasena;
    this.informacionAcademica = informacionAcademica;
    this.canalYoutube = canalYoutube;
    this.idioma = idioma;
  }
}

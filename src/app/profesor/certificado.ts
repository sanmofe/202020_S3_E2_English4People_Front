import {Profesor} from './profesor';
export class Certificado{
  id:number;
  nombre: string;
  idioma: string;


constructor(id:number,
  nombre: string,
  idioma:string,
  ){
    this.id =id;
    this.nombre = nombre;
    this.idioma = idioma;
  }
}

import { Profesor } from "../profesor/profesor";
import { Estudiante } from '../estudiante/estudiante';
import { Idioma} from '../idioma/idioma';

export class Clase{

  id: number;
  fecha: Date;
  tipoClase: string;
  profesor: Profesor;
  estudiante: Estudiante;
  idioma: Idioma;

  constructor(id: number, tipoClase:string, fecha:Date, estudiante: Estudiante, profesor: Profesor, idioma:Idioma)
  {
    this.id = id;
    this.fecha = fecha;
    this.tipoClase = tipoClase;
    this.profesor = profesor;
    this.estudiante = estudiante;
    this.idioma = idioma;
  }
}

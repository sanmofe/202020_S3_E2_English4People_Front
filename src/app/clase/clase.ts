import { Profesor } from "../profesor/profesor";
import { Estudiante } from '../estudiante/estudiante';

export class Clase{

  id: number;
  tipoClase: string;
  fecha: Date;
  estudiante: Estudiante;
  profesor: Profesor;

  constructor(id: number, tipoClase:string, fecha:Date, estudiante: Estudiante, profesor: Profesor)
  {
    this.id = id;
    this.tipoClase = tipoClase;
    this.fecha = fecha;
    this.estudiante = estudiante;
    this.profesor = profesor;
  }
}

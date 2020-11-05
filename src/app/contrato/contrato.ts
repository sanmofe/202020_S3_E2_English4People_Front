import { Profesor } from "../profesor/profesor";
import { Estudiante } from '../estudiante/estudiante';
export class Contrato{

  id: number;
  numeroHoras: number;
  costo: number;
  medioPago: string;
  estudiante: Estudiante;
  profesor: Profesor;

  constructor(id: number, numeroHoras: number, costo: number, medioPago: string, estudiante: Estudiante, profesor: Profesor) {
    this.id = id;
    this.numeroHoras = numeroHoras;
    this.costo = costo;
    this.medioPago = medioPago;
    this.estudiante = estudiante;
    this.profesor = profesor;
  }

}

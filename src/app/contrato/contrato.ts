import { Profesor } from "../profesor/profesor";
export class Contrato{

  id: number;
  numeroHoras: number;
  costo: number;
  medioPago: string;
  profesor: Profesor;

  constructor(id: number, numeroHoras: number, costo: number, medioPago: string, profesor: Profesor) {
    this.id = id;
    this.numeroHoras = numeroHoras;
    this.costo = costo;
    this.medioPago = medioPago;
    this.profesor = profesor;
  }

}

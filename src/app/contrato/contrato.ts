export class Contrato{

  id: number;
  numeroHoras: number;
  costo: number;
  medioPago: string;

  constructor(id: number, numeroHoras: number, costo: number, medioPago: string) {
    this.id = id;
    this.numeroHoras = numeroHoras;
    this.costo = costo;
    this.medioPago = medioPago;
  }

}

export class Clase{

  id: number;
  tipoClase: string;
  fecha: Date;

  constructor(id: number, tipoClase:string, fecha:Date)
  {
    this.id = id;
    this.tipoClase = tipoClase;
    this.fecha = fecha;
  }
}

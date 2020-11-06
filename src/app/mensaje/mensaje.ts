export class Mensaje{

  id: number;
  contenido: string;
  fecha: Date;

  constructor(id: number, contenido: string,
    fecha: Date)
  {
    this.id = id;
    this.contenido = contenido;
    this.fecha = fecha;
  }
}

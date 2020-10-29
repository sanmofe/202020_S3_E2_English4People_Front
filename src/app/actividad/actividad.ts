export class Actividad{

  id:number;
  tipo:string;
  descripcion:string;
  fecha: Date;

  constructor(id: number, tipo:string, descripcion:string, fecha:Date)
  {
    this.id = id;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}

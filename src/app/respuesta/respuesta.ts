import { Calificacion } from "../calificacion/calificacion";

export class Respuesta {
  id: number;
  calificacion: Calificacion;
  comentario: string;
  fecha: any;

  constructor(id: number, calificacion: Calificacion, comentario:string, fecha: any){
    this.id = id;
    this.calificacion = calificacion;
    this.comentario = comentario;
    this.fecha = fecha;
  }
}

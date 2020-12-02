import { MaterialDeclase } from '../materialDeclase/materialDeClase';
export class Actividad{

  id:number;
  tipoActividad:string;
  descripcion:string;
  fecha: Date;
  materialDeClase: MaterialDeclase;

  constructor(id: number, tipoActividad:string, descripcion:string, fecha:Date,  materialDeClase: MaterialDeclase)
  {
    this.id = id;
    this.tipoActividad = tipoActividad;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.materialDeClase = materialDeClase;
  }
}

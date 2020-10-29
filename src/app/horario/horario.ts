import { DiaSemana } from "../diaSemana/diaSemana";
export class Horario{

  id: number;
  horaInicio: string;
  horaFin: string;

  diaSemana: DiaSemana;


 constructor(id: number, horaInicio: string, horaFin: string, diaSemana: DiaSemana) {
   this.id = id;
   this.horaInicio = horaInicio;
   this.horaFin = horaFin;
   this.diaSemana = diaSemana;
 }

}

import { Respuesta } from '../respuesta/respuesta';
import { Profesor } from '../profesor/profesor';

export class Calificacion{
    id: number;
    calificacionNumerica: number;
    nombreEstudiante: string;
    fecha: any;
    profesor: Profesor;
    respuesta: Respuesta;

    constructor(id: number, calificacionNumerica: number, nombreEstudiante: string, fecha: any, respuesta: Respuesta, profesor: Profesor){
        this.id = id;
        this.calificacionNumerica = calificacionNumerica;
        this.nombreEstudiante = nombreEstudiante;
        this.fecha = fecha;
        this.respuesta = respuesta
        this.profesor = profesor
    }

}

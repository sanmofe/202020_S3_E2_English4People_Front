
export class Calificacion{
    id: number;
    calificacionNumerica: number;
    nombreEstudiante: string;
    fecha: any;
    //profesor: Profesor;
    //respuesta: Respuesta;

    constructor(id: number, calificacionNumerica: number, nombreEstudiante: string, fecha: any){
        this.id = id;
        this.calificacionNumerica = calificacionNumerica;
        this.nombreEstudiante = nombreEstudiante;
        this.fecha = fecha;
    }

}
import { Calificacion } from "./calificacion";
import { Respuesta } from "../respuesta/respuesta";

export class CalificacionDetail extends Calificacion{

  respuestas: Array<Respuesta>;

}

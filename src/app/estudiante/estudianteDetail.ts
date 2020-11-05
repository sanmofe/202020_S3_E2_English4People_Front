import {Estudiante} from './estudiante';
import {Contrato} from '../contrato/contrato';
import {Chat} from '../chat/chat';
import {Clase} from '../clase/clase';
import {Actividad} from '../actividad/actividad';

export class EstudianteDetail extends Estudiante{
  contratos: Array<Contrato>;
  chats: Array<Chat>;
  clases: Array<Clase>;
  actividades: Array<Actividad>;

}

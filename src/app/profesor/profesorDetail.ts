import {Profesor} from './profesor';
import {Certificado} from './certificado';
import {Horario} from '../horario/horario';
import {Contrato} from '../contrato/contrato';
import {Chat} from '../chat/chat';
import {Calificacion} from '../calificacion/calificacion';
import {Clase} from '../clase/clase';
import {Actividad} from '../actividad/actividad';

export class ProfesorDetail extends Profesor {
  horarios: Array<Horario>;
  contratos: Array<Contrato>;
  chats: Array<Chat>;
  calificaciones: Array<Calificacion>;
  clases: Array<Clase>;
  actividades: Array<Actividad>;
  certificados: Array<Certificado>;
}

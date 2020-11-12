import { Clase } from './clase';
import { Profesor } from '../profesor/profesor';
import { Estudiante} from '../estudiante/estudiante';

export class ClaseDetail extends Clase{
  profesores: Array<Profesor>;
  estudiantes: Array< Estudiante>;
}

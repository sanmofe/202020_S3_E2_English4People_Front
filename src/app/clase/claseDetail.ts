import { Clase } from './clase';
import { Profesor } from '../profesor/profesor';
import { Estudiante} from '../estudiante/estudiante';
import { Idioma} from '../idioma/idioma';

export class ClaseDetail extends Clase{
  profesores: Array<Profesor>;
  estudiantes: Array< Estudiante>;
  idiomas: Array< Idioma>;
}

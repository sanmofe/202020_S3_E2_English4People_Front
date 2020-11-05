import { Horario } from '../horario/horario';
import { Contrato } from './contrato';

export class ContratoDetail extends Contrato{
  horarios: Array<Horario>;
}

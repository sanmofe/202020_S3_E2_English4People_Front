import{ Clase} from '../clase/clase';
export class MaterialDeclase {

  id:number;
  enlaceMaterial:string;
  clase: Clase;
  constructor(id:number, enlaceMaterial:string, clase :Clase) {

    this.id=id;
    this.enlaceMaterial= enlaceMaterial;
    this.clase = clase;

  }
}

export class Idioma {

  id: number;
  espanol: boolean;
  ingles: boolean;
  frances: boolean;
  italiano: boolean;
  portugues: boolean;
  aleman: boolean;
  japones: boolean;
  coreano: boolean;
  mandarin: boolean;

  constructor(id: number, espanol: boolean, ingles: boolean, frances: boolean, italiano: boolean, portugues: boolean, aleman: boolean, japones: boolean, coreano: boolean, mandarin: boolean)
  {
    this.id = id;
    this.espanol = espanol;
    this.ingles = ingles;
    this.frances = frances;
    this.italiano = italiano;
    this.portugues = portugues;
    this.aleman = aleman;
    this.japones = japones;
    this.coreano = coreano;
    this.mandarin = mandarin;
  }
}

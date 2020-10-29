export class DiaSemana {
  id: number;
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;

  constructor(id: number, lunes: boolean, martes: boolean, miercoles: boolean, jueves: boolean, viernes: boolean, sabado: boolean, domingo: boolean) {
    this.id = id;
    this.lunes = lunes;
    this.martes = martes;
    this.miercoles = miercoles;
    this.jueves = jueves;
    this.viernes = viernes;
    this.sabado = sabado;
    this.domingo = domingo;
  }
}

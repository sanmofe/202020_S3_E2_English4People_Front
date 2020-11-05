/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ContratoListComponent } from "./contrato-list.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Contrato } from "../contrato";
import { Profesor } from "src/app/profesor/profesor";
import { Estudiante } from 'src/app/estudiante/estudiante';
import { ContratoDetail } from '../contratoDetail';

describe("ContratoListComponent", () => {
 let component: ContratoListComponent;
 let fixture: ComponentFixture<ContratoListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ContratoListComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ContratoListComponent);
   component = fixture.componentInstance;
   let profesor = new Profesor(
    faker.random.number(),
    faker.lorem.sentence(),
    faker.random.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    null
  );
  let estudiante = new Estudiante(
    faker.random.number(),
    faker.lorem.sentence(),
    faker.random.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence()
  );
   component.contratos = [
     new ContratoDetail(
       faker.random.number(),
       faker.random.number(),
       faker.random.number(),
       faker.lorem.sentence(),
       estudiante,
       profesor
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an figcaption element ", () => {
   expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
     component.contratos[0].costo
   );

   expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
     component.contratos[0].profesor.identificacion
   );
 });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { HorarioListComponent } from "./horario-list.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Horario } from "../horario";

describe("HorarioListComponent", () => {
 let component: HorarioListComponent;
 let fixture: ComponentFixture<HorarioListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [HorarioListComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(HorarioListComponent);
   component = fixture.componentInstance;
   component.horarios = [
     new Horario(
       faker.random.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence()
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
     component.horarios[0].horaInicio
   );
/**
   expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
     component.contratos[0].editorial.name
   );
   */
});
});

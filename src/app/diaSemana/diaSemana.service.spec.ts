/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { DiaSemanaService } from "./diaSemana.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { DiaSemana } from "./diaSemana";
import { environment } from "../../environments/environment";

describe("Service: DiaSemana", () => {
 let injector: TestBed;
 let service: DiaSemanaService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "diasSemana";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [DiaSemanaService],
   });
   injector = getTestBed();
   service = injector.get(DiaSemanaService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: DiaSemana[] = [];

   for (let i = 1; i < 11; i++) {
     let diaSemana = new DiaSemana(
       i,
       true,
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean()
     );

     mockPosts.push(diaSemana);
   }

   service.getDiasSemana().subscribe((diasSemana) => {
     expect(diasSemana.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});

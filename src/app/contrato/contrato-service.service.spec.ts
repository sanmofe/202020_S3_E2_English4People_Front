/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { ContratoServiceService } from "./contrato-service.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Contrato } from "./contrato";
import { environment } from "../../environments/environment";

describe("Service: Contrato", () => {
 let injector: TestBed;
 let service: ContratoServiceService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "contratos";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ContratoServiceService],
   });
   injector = getTestBed();
   service = injector.get(ContratoServiceService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Contrato[] = [];

   for (let i = 1; i < 11; i++) {
     let contrato = new Contrato(
       i,
       faker.random.number(),
       faker.random.number(),
       faker.lorem.sentence(),
       null
     );

     mockPosts.push(contrato);
   }

   service.getContratos().subscribe((contratos) => {
     expect(contratos.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});


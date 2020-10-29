import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { HorarioServiceService } from "./horario-service.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Horario } from "./horario";
import { environment } from "../../environments/environment";

describe("Service: Horario", () => {
 let injector: TestBed;
 let service: HorarioServiceService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "horarios";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [HorarioServiceService],
   });
   injector = getTestBed();
   service = injector.get(HorarioServiceService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Horario[] = [];

   for (let i = 1; i < 11; i++) {
     let horario = new Horario(
       i,
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       null
     );

     mockPosts.push(horario);
   }

   service.getHorarios().subscribe((horarios) => {
     expect(horarios.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});

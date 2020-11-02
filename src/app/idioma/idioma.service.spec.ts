/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { IdiomaService } from "./idioma.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Idioma } from "./idioma";
import { environment } from "../../environments/environment";

describe("Service: Idioma", () => {
 let injector: TestBed;
 let service: IdiomaService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "idiomas";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [IdiomaService],
   });
   injector = getTestBed();
   service = injector.get(IdiomaService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Idioma[] = [];

   for (let i = 1; i < 11; i++) {
     let idioma = new Idioma(
       i,
       true,
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean(),
       faker.random.boolean()
     );

     mockPosts.push(idioma);
   }

   service.getIdiomas().subscribe((idiomas) => {
     expect(idiomas.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});


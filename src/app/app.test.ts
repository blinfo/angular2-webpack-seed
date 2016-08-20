/* tslint:disable */ 
import { AppModule } from "./app.module";
import {  inject, TestBed  } from "@angular/core/testing";
/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />
describe("App", () => {
 TestBed.configureTestingModule({
    providers: [ AppModule],
  });
  it("bla", function(){

  })
 /*it ("should work", inject([AppModule], (app: AppModule) => {
    // Add real test here
    expect(true).toBe(true);
  }))*/
});

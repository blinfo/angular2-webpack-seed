import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { TestBed, inject } from "@angular/core/testing";

describe("App", () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers:[
    AppComponent,
    AppModule,
  ]}));
  it("should have a module", inject([ AppModule ], (app: AppComponent) => {
    expect(app).toBeDefined();
  }));
  it("should have a component", inject([ AppComponent ], (app: AppComponent) => {
    expect(app.id).toBeDefined();
  }));
});


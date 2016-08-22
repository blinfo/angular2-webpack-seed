import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { addProviders, inject } from "@angular/core/testing";

describe("App", () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([
    AppComponent,
    AppModule,
  ]));
  it("should have a module", inject([ AppModule ], (app) => {
    expect(app).toBeDefined();
  }));
  it("should have a component", inject([ AppComponent ], (app) => {
    expect(app.id).toBeDefined();
  }));
});

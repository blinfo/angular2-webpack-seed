import { AppComponent } from "./app.component";
import { beforeEachProviders, describe, expect, inject , it } from "@angular/core/testing";

describe("App", () => {
  beforeEachProviders(() => [
    AppComponent,
  ]);
  it ("should work", inject([AppComponent], (app: AppComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});

import { AboutComponent }       from "./about.component";
import { appRoutingProviders, routing } from "./about.routing";
import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  bootstrap: [ AboutComponent ],
  declarations: [
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
})
export class AboutModule {}

import { ContactComponent }       from "./contact.component";
import { appRoutingProviders, routing } from "./contact.routing";
import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  bootstrap: [ ContactComponent ],
  declarations: [
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
})
export class ContactModule {}

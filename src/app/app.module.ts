import { AboutModule } from "./about/about.module";
import { AppComponent }  from "./app.component";
import { appRoutingProviders, routing } from "./app.routing";
import { ContactModule } from "./contact/contact.module";
import { NavComponent } from "./nav/nav.component";
import { NgModule }      from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { Title } from "@angular/platform-browser";

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, NavComponent ],
  imports:      [ BrowserModule, AboutModule, ContactModule, routing, HttpModule],
   providers: [
    Title,appRoutingProviders,
  ],
})
export class AppModule { }

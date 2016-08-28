import { AboutModule } from "./about/about.module";
import { AppComponent }  from "./app.component";
import { appRoutingProviders, routing } from "./app.routing";
import { ContactModule } from "./contact/contact.module";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { NgModule }      from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { Title } from "@angular/platform-browser";

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, NavComponent, HomeComponent ],
  imports:      [ BrowserModule, AboutModule, ContactModule, routing, HttpModule],
   providers: [
    Title,appRoutingProviders,
  ],
})
export class AppModule {
  public id: string = "haha";
 }

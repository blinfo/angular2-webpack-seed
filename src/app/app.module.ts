import { AppComponent }  from "./app.component";
import { NgModule }      from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { Title } from "@angular/platform-browser";

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, HttpModule, FormsModule],
   providers: [
    Title,
  ],
})
export class AppModule {
  public id: string = "haha";
 }

/* tslint:disable */
import { Component, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subject } from "rxjs/RX";

@Component({
    // directives: [],
    encapsulation: ViewEncapsulation.None,
    selector: "sg-app",
    styles: [require("./app.styles.css").toString()],
    templateUrl: "./app.template.html",
})

export class AppComponent {
  click$ = new Subject();
  clock;
  constructor(){
    this.clock = this.click$.map(() => new Date())
  }
}

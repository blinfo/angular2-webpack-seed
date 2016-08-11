import  { NavComponent } from "./nav/nav.component";
import { Component } from "@angular/core";
import {  ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    directives: [ NavComponent , ROUTER_DIRECTIVES],
    selector: "sg-app",
    templateUrl: "./app.template.html",
})

export class AppComponent {
 public id: string = "fd";
}


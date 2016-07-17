import  { NavComponent } from "./nav/nav.component";
import { Component } from "@angular/core";
import {  ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    directives: [ NavComponent , ROUTER_DIRECTIVES],
    selector: "sg-app",
    template: `<h1>Angular.io</h1>
    <my-nav></my-nav>  
    <router-outlet></router-outlet>
    <footer>Mr.JS</footer>
    `,
})
export class AppComponent {
 public id: string = "fd";
}

import  { Nav } from "./nav/nav.component";
import { Component } from "@angular/core";
import {  ROUTER_DIRECTIVES } from "@angular/router";


@Component({
    directives: [ Nav , ROUTER_DIRECTIVES],
    selector: "my-app",
    template: `<h1>Angular.io</h1>
    <my-nav></my-nav>  
    <router-outlet></router-outlet>
    <footer>Mr.JS</footer>
    `,
})
export class AppComponent{



}


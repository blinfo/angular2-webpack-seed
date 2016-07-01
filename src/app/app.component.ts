import { Component } from "@angular/core";
import  { Nav } from "./nav/nav.component";
import {  ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    directives: [ Nav , ROUTER_DIRECTIVES],
    selector: "my-app",
    template: `<h1>Angular Webpack Startkit</h1>
    <nav>
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/about']">About</a>
        <a [routerLink]="['/contact']">Contact Us</a>
    </nav>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
}

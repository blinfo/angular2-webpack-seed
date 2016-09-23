import { Component, ViewEncapsulation } from "@angular/core";
// import {  ROUTER_DIRECTIVES } from "@angular/router";
import "bootstrap/dist/css/bootstrap.css";

@Component({
   // directives: [ ROUTER_DIRECTIVES ],
    encapsulation: ViewEncapsulation.None,
    selector: "sg-nav",
    templateUrl: "nav.template.html",
})
export class NavComponent {
    public name: string = "MR.Js";
}

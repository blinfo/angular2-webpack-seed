import {Component, ViewEncapsulation} from "@angular/core";
import {  ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    directives: [ Nav , ROUTER_DIRECTIVES],
    selector: "my-nav",
    encapsulation: ViewEncapsulation.None,
    template: `
  <header>
        <ul>
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/about']">About</a>
        <a [routerLink]="['/contact']">Contact Us</a>
        </ul>
  </header>
`,
})
export class Nav {
    public name: string = "MR.Js";
}

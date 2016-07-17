import { Component, ViewEncapsulation } from "@angular/core";
import {  ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    directives: [ ROUTER_DIRECTIVES ],
    encapsulation: ViewEncapsulation.None,
    selector: "sg-nav",
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
export class NavComponent {
    public name: string = "MR.Js";
}

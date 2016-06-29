import { Component } from "@angular/core";
import  { Nav } from "./nav/nav.component";
@Component({
    directives: [Nav],
    selector: "my-app",
    template: "<my-nav>" +
    "</my-nav><h1>Hello angular.io</h1>",
})
export class AppComponent {
}

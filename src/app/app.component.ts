import { Component , ViewEncapsulation } from "@angular/core";

@Component({
    // directives: [],
    encapsulation: ViewEncapsulation.None,
    selector: "sg-app",
    styles: [require("./app.styles.css").toString()],
    templateUrl: "./app.template.html",
})
export class AppComponent {
 public id: string = "fd";
}

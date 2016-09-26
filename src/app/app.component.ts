import { Component , ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    // directives: [],
    encapsulation: ViewEncapsulation.None,
    selector: "sg-app",
    styles: [require("./app.styles.css").toString()],
    templateUrl: "./app.template.html",
})
export class AppComponent {
 public  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}

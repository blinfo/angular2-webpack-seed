/* tslint:disable */
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    // directives: [],
    encapsulation: ViewEncapsulation.None,
    selector: "sg-app",
    styles: [require("./app.styles.css").toString()],
    templateUrl: "./app.template.html",
})

export class AppComponent  implements  AfterViewInit {
  @ViewChild('formRef') form;
  public username = "Jorawar";

 public  onSubmit(formValue) {
   console.log(formValue);
 }
 ngAfterViewInit(){
   this.form.valueChanges.subscribe(v => console.log(v));
  }
}

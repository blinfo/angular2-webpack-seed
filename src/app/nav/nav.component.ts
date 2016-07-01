import {Component, ViewEncapsulation} from "@angular/core";
@Component({
    selector: "my-nav",
    encapsulation: ViewEncapsulation.None,
    template: `
  <header>
        <ul>
            <li><a href="" [routerLink]="['/']"></a></li>
        </ul>
  </header>
  <main>
    <router-outlet></router-outlet>
        <!-- the component's template will be inserted here-->
  </main>
  <footer><h1>Mr.js made with love</h1></footer>
`,
})
export class Nav {
    public name: string = "MR.Js";
}

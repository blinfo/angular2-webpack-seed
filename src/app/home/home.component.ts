/**
 * Created by js on 2016-06-30.
 */
import { HomeService } from "./home.service";
import { Component , Inject, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
     providers: [ HomeService  ],
    template: `
                <h3>Heroes:</h3>
                <ul>
                  <li *ngFor="let hero of test">
                    {{hero.name}}
                  </li>
                </ul>
               `,
})

export class HomeComponent implements OnInit {

   public errorMessage: string;
   public test: Test[];

   public ngOnInit() {
        this.setTitle( "home" );
        this.getData();
    }

    public constructor(@Inject(Title) private titleService: Title,
                       @Inject(HomeService) private homeService: HomeService) {}

  private  setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

  private  getData () {
        return this.homeService.getHeroes().subscribe(
            test => this.test = test,
            error =>  this.errorMessage = <any>error);
    }
}
export class Test {
    constructor(public id: string, public name: string) {}
}

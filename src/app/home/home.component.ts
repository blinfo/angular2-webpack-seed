/**
 * Created by js on 2016-06-30.
 */
import { HomeService } from "./home.service";
import { Component , OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";


@Component({
    directives: [MD_CARD_DIRECTIVES],
    providers: [ HomeService  ],
    template: `
                <h3>Github Users:{{[].concat(users).length}} </h3>
               
                <ul>
                  <li *ngFor="let user of users" style="list-style:none">                  
                    <img class="col-lg-8" src="{{user.avatar_url}}" style="height:200px; width:250px;"/>
                  </li>                  
                </ul>
                
               `,
})

export class HomeComponent implements OnInit {
   public errorMessage: string;
   public users: GitUser[];
   public ngOnInit() {
        this.setTitle( "home" );
        this.getData();
    }

    public constructor(private titleService: Title, private homeService: HomeService) {}

  private  setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

  private  getData () {
        return this.homeService.getHeroes().subscribe(
            users => this.users = users,
            error =>  this.errorMessage = <any>error);
    }
}
export class GitUser {
   private avatar_url: string;
   constructor(test: string) {
    this.avatar_url = test;
   }
}

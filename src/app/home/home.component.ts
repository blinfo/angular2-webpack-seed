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
    templateUrl: "./home.template.html",
})

export class HomeComponent implements OnInit {
   public errorMessage: string;
   public users: any [];
   private alert(): void {
    return alert();
    };
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

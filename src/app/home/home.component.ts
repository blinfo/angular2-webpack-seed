/**
 * Created by js on 2016-06-30.
 */
import { Component , OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";

 // not working 


@Component({
    directives: [MD_CARD_DIRECTIVES],
    providers: [],
    templateUrl: "./home.template.html",
})

export class HomeComponent implements OnInit {
   public errorMessage: string;
   public users: any [];

   public ngOnInit() {
        this.setTitle( "home" );
    }

    public constructor(private titleService: Title) {}

  private  setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}

/**
 * Created by js on 2016-06-30.
 */
import { Component ,   OnInit  } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    template: "<h1>About page!</h1>",
})
export class AboutComponent implements OnInit {
      public constructor(private titleService: Title) {}
   public ngOnInit() {
       // console.log("App component loaded");
        this.setTitle( "about" );
    }

    private  setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
};

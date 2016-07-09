/**
 * Created by js on 2016-06-30.
 */
import { Component ,Inject, OnInit} from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
    template: '<h1>Home page!</h1>'

})



export class Home implements OnInit{

    ngOnInit() {
        console.log("App component loaded");
         this.titleService.setTitle( "home" );
    }

    public constructor(@Inject(Title) private titleService: Title ) {}

    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }


}

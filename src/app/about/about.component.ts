/**
 * Created by js on 2016-06-30.
 */
import { Component , OnInit, Inject} from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
    template: "<h1>About page!</h1>",
})
export class About implements OnInit{

    ngOnInit() {
        console.log("App component loaded");
        this.titleService.setTitle( "about" );
    }

    public constructor(@Inject(Title) private titleService: Title ) {}

    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }


}
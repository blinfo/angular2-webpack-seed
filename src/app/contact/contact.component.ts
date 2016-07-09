/**
 * Created by js on 2016-06-30.
 */
import { Component ,OnInit, Inject} from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
    template: "<h1>Contact page</h1>",
})
export class ContactComponent implements OnInit{

    ngOnInit() {
        console.log("App component loaded");
        this.titleService.setTitle( "contact" );
    }

    public constructor(@Inject(Title) private titleService: Title ) {}

    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }


}
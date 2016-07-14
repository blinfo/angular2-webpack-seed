import { AppComponent } from "./app.component";
import { About } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { Title } from "@angular/platform-browser";
import { Component , OnInit, Inject} from "@angular/core";

it('should behave...', () => {
    expect(AppComponent).not.toBe(null);       
});  

it('should behave...', () => {
    expect(About).not.toBe(null);
});
    
it('should behave...', () => {
    expect(ContactComponent).not.toBe(null);
});

it('should behave...', () => {
    //TODO Inject title service from angular with beforeeach method
    let titleService : Title;
    let about = new About(titleService);
  //  about.setTitle("my title test")
   // expect(titleService.getTitle()).toBe('Function');
     expect(titleService).toBe('');    
});
    
import { ContactComponent }       from './contact.component';
import { routing, appRoutingProviders } from './contact.routing';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    ContactComponent,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ ContactComponent ]
})
export class ContactModule{}

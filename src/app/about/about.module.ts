import { AboutComponent }       from './about.component';
import { routing, appRoutingProviders } from './about.routing';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AboutComponent,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AboutComponent ]
})
export class AboutModule{}

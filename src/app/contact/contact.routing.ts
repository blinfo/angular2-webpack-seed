import { Routes, RouterModule }   from '@angular/router';
import {ContactComponent} from "./contact.component";
const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
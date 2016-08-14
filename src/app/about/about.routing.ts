import { Routes, RouterModule }   from '@angular/router';
import {AboutComponent} from "./about.component";
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
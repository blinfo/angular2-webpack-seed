import { AboutComponent } from "./about.component";
import { RouterModule, Routes }   from "@angular/router";
const appRoutes: Routes = [
  { component: AboutComponent, path: "about"},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes }   from "@angular/router";
const appRoutes: Routes = [
  {  component: HomeComponent , path: "" },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

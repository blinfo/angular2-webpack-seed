import { ContactComponent } from "./contact.component";
import { RouterModule, Routes }   from "@angular/router";
const appRoutes: Routes = [
  { component: ContactComponent , path: "contact" },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

import  { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import  { HomeComponent } from "../home/home.component";
import { RouterConfig , provideRouter } from "@angular/router";

export const routes: RouterConfig = [
    { component: HomeComponent, path: "" , pathMatch: "full"},
    { component: AboutComponent, path: "about" },
    { component: ContactComponent, path: "contact" },
    { path: "**", redirectTo: "about"},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];

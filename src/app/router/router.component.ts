import  { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import  { HomeComponent } from "../home/home.component";
import { RouterConfig , provideRouter } from "@angular/router";

export const routes: RouterConfig = [
    { path: "",
        redirectTo: "home",
        terminal: true},
    { component: HomeComponent, path: "" },
    { component: AboutComponent, path: "about" },
    { component: ContactComponent, path: "contact" },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];

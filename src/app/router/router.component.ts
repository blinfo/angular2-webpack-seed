import  { Home } from "../home/home.component";
import  { About } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { provideRouter , RouterConfig} from "@angular/router";

export const routes: RouterConfig = [
    { path: "",
        redirectTo: "home",
        terminal: true},
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "contact", component: ContactComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];

import "core-js";
import "zone.js/dist/zone";
import "reflect-metadata";
import "es6-shim";
import { bootstrap }    from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app/app.component";
import {  APP_ROUTER_PROVIDERS } from "./app/router/router.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common"

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]).catch(err => console.error(err));

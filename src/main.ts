import "core-js";
import "zone.js/dist/zone";
import "reflect-metadata";
import "es6-shim";
import { bootstrap }    from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app/app.component";
import {  APP_ROUTER_PROVIDERS } from "./app/router/router.component";

bootstrap(AppComponent, [ APP_ROUTER_PROVIDERS ]).catch(err => console.error(err));

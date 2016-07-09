import { AppComponent } from "./app/app.component";
import {  APP_ROUTER_PROVIDERS } from "./app/router/router.component";
import { bootstrap }    from "@angular/platform-browser-dynamic";
import { enableProdMode } from '@angular/core';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
]).catch(err => console.error(err));

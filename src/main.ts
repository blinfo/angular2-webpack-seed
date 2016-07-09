import { bootstrap }    from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app/app.component";
import {  APP_ROUTER_PROVIDERS } from "./app/router/router.component";
import { enableProdMode } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    Title,
    {provide: APP_BASE_HREF, useValue: '/'}
]).catch(err => console.error(err));

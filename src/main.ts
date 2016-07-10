import { bootstrap }    from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app/app.component";
import {  APP_ROUTER_PROVIDERS } from "./app/router/router.component";
import { enableProdMode } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Title
]).catch(err => console.error(err));

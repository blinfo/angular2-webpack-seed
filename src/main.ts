import { AppComponent } from "./app/app.component";
import {  APP_ROUTER_PROVIDERS } from "./app/router/router.component";
import { enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { Title } from "@angular/platform-browser";
import { bootstrap }    from "@angular/platform-browser-dynamic";

/// <reference path="../typings/globals/node/index.d.ts" />

if (process.env.NODE_ENV === "production") { enableProdMode(); }
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Title,
]).catch(err => console.error(err));

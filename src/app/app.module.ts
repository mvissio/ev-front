import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiceModule} from "./services/service.module";
import {PagesModule} from "./pages/pages.module";
import {SharedModule} from "./shared/shared.module";
import {APP_ROUTES} from "./app.routes";
import {RegisterComponent} from "./login/register.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SharedModule,
    PagesModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }

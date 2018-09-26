import {NgModule} from '@angular/core';

import {BreadCrumbsComponent} from './bread-crumbs/bread-crumbs.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent
  ]
})

export class SharedModule {}

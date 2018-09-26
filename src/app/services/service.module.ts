import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarService, SettingsService, SharedService, UserService} from './service.index';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SettingsService,
    SharedService,
    UserService
  ],
  declarations: []
})
export class ServiceModule {
}

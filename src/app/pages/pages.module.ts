import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GraphFirstComponent} from './graph-first/graph-first.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.router';
import {FormsModule} from '@angular/forms';
import {IncrementComponent} from '../components/increment/increment.component';
import {ChartsModule} from 'ng2-charts';
import {GraphCircleComponent} from '../components/graph-circle/graph-circle.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    GraphFirstComponent,
    GraphCircleComponent,
    IncrementComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ChartsModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ProgressComponent,
    GraphCircleComponent,
    GraphFirstComponent
  ]
})

export class PagesModule {
}

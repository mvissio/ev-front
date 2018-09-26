import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GraphFirstComponent} from './graph-first/graph-first.component';
import {ProgressComponent} from './progress/progress.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'accountSettings', component: AccountSettingsComponent, data: {title: 'Ajustes de Tema'}},
      {path: 'graphFirst', component: GraphFirstComponent, data: {title: 'Graficas'}},
      {path: 'promesas', component: PromesasComponent, data: {title: 'Promesas'}},
      {path: 'progress', component: ProgressComponent, data: {title: 'Progreso'}},
      {path: 'rsjs', component: RxjsComponent, data: {title: 'RxJs'}},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

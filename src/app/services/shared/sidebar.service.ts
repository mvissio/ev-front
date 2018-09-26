import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [{
    title: 'Principal',
    icon: 'mdi mdi-gauge',
    submenuList: [
      {title: 'Dashboard', url: '/dashboard'},
      {title: 'ProgressBar', url: '/progress'},
      {title: 'Graficas', url: '/graphFirst'},
      {title: 'Promesas', url: '/promesas'},
      {title: 'Rsjs', url: '/rsjs'}
    ]
  }];

  constructor() {
  }
}

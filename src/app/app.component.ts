import { Component } from '@angular/core';
import {SettingsService} from "./services/service.index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ev-front';

  constructor(private _settingsServ: SettingsService) {
  }
}

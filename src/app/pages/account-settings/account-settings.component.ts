import {Component, Inject, OnInit} from '@angular/core';
import {SettingsService} from '../../services/service.index';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _settings: SettingsService) {
  }

  ngOnInit() {
    this.onUseCheck();
  }

  changeTheme(themeSelect: string, link: any) {
    this.onAddCheck(link);
    this._settings.onUploadTheme(themeSelect);
  }

  onAddCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  onUseCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;

    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}

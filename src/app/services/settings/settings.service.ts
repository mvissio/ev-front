import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: SettingsInterface = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.onUpSettings();
  }

  onSaveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  onUpSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.onUploadTheme(this.settings.theme);
  }

  onUploadTheme(themeSelect: string) {
    let url = `assets/css/colors/${themeSelect}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = themeSelect;
    this.settings.themeUrl = url;
    this.onSaveSettings();
  }
}

interface SettingsInterface {
  themeUrl: string;
  theme: string;
}

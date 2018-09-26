import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/service.index';
import {UserModel} from '../models/user.model';

declare function init_plugin();

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  record = false;
  email: string;

  auth2: any;

  constructor(private router: Router, private _userService: UserService) {
  }

  ngOnInit() {
    init_plugin();
    this.onGoogleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.record = true;
    }
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      console.log(true);
      let user = new UserModel(null, form.value.email, form.value.password);
      this._userService.loginUser(user, form.value.record)
        .subscribe(resp => {
          this.router.navigate(['/dashboard']);
        });
    }
  }

  onGoogleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '649498590853-l95cb79nhespb2kcvocu41mq0ackuu9a.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.onAttachSignin(document.getElementById('btnGoogle'));
    });
  }

  onAttachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      console.log(token);
    });
  }

}

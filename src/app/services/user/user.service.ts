import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {URL_SERVICES} from '../../config/config';
import swal from 'sweetalert';
import {map} from 'rxjs/operators';
import {el} from '@angular/platform-browser/testing/src/browser_util';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient) {
  }

  createUser(user: UserModel) {
    let url = URL_SERVICES + '/user';
    return this._http.post(url, user)
      .pipe(map((resp: any) => {
        swal('Usuario Creado', user.email, 'success');
        return resp.user;
      }));
  }

  loginUser(user: UserModel, record: boolean) {
    let url = URL_SERVICES + '/login';
    if (record) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }
    return this._http.post(url, user)
      .pipe(map((resp: any) => {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        return true;
      }));
  }
}

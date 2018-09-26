import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';
import {UserService} from '../services/service.index';
import {UserModel} from '../models/user.model';
import {Router} from '@angular/router';

declare function init_plugin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private _userService: UserService, private _router:Router) {
  }

  equalsString(val1: string, val2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[val1].value;
      let pass2 = group.controls[val2].value;
      if (pass1 === pass2) {
        return null;
      } else {
        return {
          equalsString: true
        };
      }

    };
  }

  ngOnInit() {
    init_plugin();
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required),
      conditions: new FormControl(false),
    }, {validators: this.equalsString('password', 'passwordConfirm')});
    this.form.setValue({
      name: 'Test',
      email: 'Name@test.com',
      password: '123456',
      passwordConfirm: '123456',
      conditions: true
    });
  }

  createUser() {
    if (this.form.invalid) {
      return;
    }
    if (!this.form.value.conditions) {
      swal('Importante', 'Debe aceptar los terminos y condiciones', 'warning');
      return;
    }
    let user = new UserModel(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );
    this._userService.createUser(user)
      .subscribe(resp => this._router.navigate((['/login'])));
  }

}

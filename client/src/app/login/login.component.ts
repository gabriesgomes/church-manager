/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { LoginUser } from '../shared/models/login.model';
import { LoginService } from '../shared/services/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm: UntypedFormGroup | any;
    user: LoginUser = new LoginUser();

    constructor(private formBuilder: UntypedFormBuilder,
                private loginService: LoginService) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
          user: this.user.name,
          password: this.user.password
        });
    }

    public logginIn(): any {
        this.user.name = this.loginForm.get('user').value;
        this.user.password = this.loginForm.get('password').value;
        console.log(this.user.name);
        console.log(this.user.password);
    }
}

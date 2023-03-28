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
          userName: this.user.userName,
          password: this.user.password
        });
    }

    public logginIn(): any {
        this.user.userName = this.loginForm.get('userName').value;
        this.user.password = this.loginForm.get('password').value;

        this.loginService.login(this.user.userName, this.user.password);
    }
}

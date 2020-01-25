import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router } from '@angular/router';
import { loginModel } from './user.model'
import {AuthService} from '../../services/auth.service'
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  errorMessages: any = {};
  loginForm: FormGroup;
  constructor( private router: Router,private auth:AuthService) {
    this.createLoginForm();
  }

  ngOnInit() {}

  createLoginForm() {
    var email = null;
    var password = null;

    this.loginForm = new FormGroup({
      email: new FormControl(email, [Validators.required]),
      password: new FormControl(password, [Validators.required])
    });
  }

  //get login form controls to handel the validation
  get logincontrols() {
    return this.loginForm.controls;
  }

  //handel validation and send data to the service
  login() {
    this.errorMessages = {};
    debugger;
    //send to the service to login
    if (Object.keys(this.errorMessages).length === 0) {
      // this.loggedIn = !this.loggedIn;
      const payload =  new loginModel(this.loginForm.value.email, this.loginForm.value.password);

      this.auth.login(this.loginForm.value).subscribe(
        (res: any) => {
          // this.loggedIn = false;
          localStorage.setItem("session", JSON.stringify(res));
          this.router.navigateByUrl("/tweets");
        },
        error => {
          //this.errorMessages["backEndError"] = error.error.error_description;
          // this.errorMessages["backEndError"] =
            // "البريد الإلكتروني أو كلمة المرور التي أدخلتها غير صحيحة  ";
          // this.loggedIn = false;
          console.log(error);
        }
      );
    } else {
      // this.loggedIn = false;
    }
  }
}

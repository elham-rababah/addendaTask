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
      email: new FormControl(email, [Validators.required,Validators.email]),
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
    console.log(this.loginForm);
    this.loginFormValidation();
    //send to the service to login
    if (!(this.loginForm.status=='INVALID')) {
      // this.loggedIn = !this.loggedIn;
      const payload =  new loginModel(this.loginForm.value.email, this.loginForm.value.password);

      this.auth.login(payload).subscribe(
        (res: any) => {
          // this.loggedIn = false;
          localStorage.setItem("session", JSON.stringify(res));
          this.router.navigateByUrl("/tweets");
        },
        error => {
          alert("Some Thing Wrong happend. please see the logs")
          console.log(error);
        }
      );
    } else {
      // this.loggedIn = false;
    }
  }

  loginFormValidation(){
    // [disabled]="loginForm.status=='INVALID'"

    const form = this.loginForm
    if(form.controls.email.errors){
      if(form.controls.email.errors.email){
        this.errorMessages['email'] = "Invalid email"
      } else {
        this.errorMessages['email'] = "required email"
      }
      if(form.controls.password.errors){
        this.errorMessages['password'] = "required password"
      }
      
    }
  }
}

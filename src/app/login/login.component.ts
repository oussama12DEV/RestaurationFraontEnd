import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenuService} from "../services/menu.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(public loginService:MenuService,public router:Router,public fb:FormBuilder) {
  }
  loginForm!: FormGroup;
  hidePassword = true;


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {

  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}

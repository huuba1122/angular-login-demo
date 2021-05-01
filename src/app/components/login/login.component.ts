import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

const user_key = 'token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // email = 'admin@gmail.com';
  // password = '123456';
  message = '';

  constructor(
    private formbd: FormBuilder,
    private router: Router,
    private authServices: AuthService
    ) 
    { 
    this.loginForm = this.formbd.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
    
  }

  checkLogin(){
    console.log(this.loginForm?.value);
    let data = this.loginForm?.value;
    this.authServices.login(data).subscribe((res) => {
      console.log(res);
      if(res.status === 'successfully'){
        sessionStorage.setItem('token',res.token);
        sessionStorage.setItem('user_name', res.user.name);
        this.router.navigate(['home']);
      }else{
        this.message = res.message;
      }
    })
  }

  getUser(){
    
  }

}

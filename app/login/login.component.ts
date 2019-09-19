import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from './login.model';
import { Router } from '@angular/router';
import{ UserService} from '../User.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  is_found:boolean;
  formLogin:FormGroup;
  constructor(private _formBuilder:FormBuilder ,private _router:Router, private _userservice:UserService ,private cookieService: CookieService ,private _httpClient:HttpClient) { }

  ngOnInit() {
    console.log(this.cookieService.get('Username').toString());
    this.formLogin=this._formBuilder.group({
      Password:['',[Validators.required]],
      Name:['',[Validators.required]]
      
    });
  }

  login(){
   
    let loginModel:Login=new Login();
   //  this._userservice.login(loginModel)
    Object.assign(loginModel,this.formLogin.value);
    console.log(loginModel);
    this._httpClient.get(`http://localhost:30660/api/User?Password=${loginModel.Password}&username=${loginModel.Name}`)
    .subscribe(
      response=>{
        this.is_found = response as boolean;
        console.log(this.is_found);
        if(this.is_found){
          this._userservice.login(loginModel);
          this._router.navigateByUrl("/profile");
        }
        
      },
      error=>{
        alert("sorry , error");
      },
      ()=>{}
    );
   /* this._userservice.login(loginModel);
    this._router.navigateByUrl("/profile");*/

  }
   
}

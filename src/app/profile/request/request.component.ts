import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from './request.model';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
   posts : Post [] =[];
  formLogin:FormGroup;
  constructor(private _formBuilder:FormBuilder ,private _httpClient:HttpClient ,private cookieService: CookieService) { }
    
  ngOnInit() {
     this.formLogin=this._formBuilder.group({
     
       PationtName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
       City:['',[Validators.required]],
       BloodType:['',[Validators.required]],
       Address:['',[Validators.required]],
       Date:['',[Validators.required]],
       Text:['',[Validators.required]]
    });
   
  }

  onClick(){
    console.log( this.cookieService.get('Username'));
    let loginModel:Post=new Post();
   
    Object.assign(loginModel,this.formLogin.value);
     loginModel.UserName = this.cookieService.get('Username');
     loginModel.BloodType =this.formLogin.controls["BloodType"].value;
     //loginModel.BloodType = 
    console.log(loginModel);
    //console.log(this.formLogin.controls["BloodType"].value)
    this._httpClient.post("http://localhost:30660/api/Post",loginModel)
    .subscribe(
      response=>{
      
      
        alert(response);
      },
      error=>{
        alert("sorry , error");
      },
      ()=>{}
    );
  }

}

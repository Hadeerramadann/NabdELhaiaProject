import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import{User}from './sign-up.model';
import { from } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {validateUserName} from './Username.valid'
//import { UserService } from '../user.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  contect_choice: string ;
  user_names:string;
  conction:User=new User() ;
  formLogin:FormGroup;
  users:User[]=[];
  
  constructor(private _formBuilder:FormBuilder ,private _httpClient:HttpClient ,private cookieService: CookieService) { 
   }

 
 
  
  ngOnInit() {
   
   // console.log( this.cookieService.get('Username'));

      this.formLogin=this._formBuilder.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      Name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Address:['',[Validators.required]],
      BloodType:['',[Validators.required]],
      Contact:['',[Validators.required]],
      UserName:['',[Validators.required ] ]
    });

   
    this._httpClient.get("http://localhost:30660/api/User")
    .subscribe(
      response=>{
      this.users = response as User [];
    
      this.formLogin.controls["UserName"].setValidators([ this.valid_username]);
      this.formLogin.controls["UserName"].updateValueAndValidity();
     /* this. users.forEach(element => {console.log(element.UserName);});*/
      },
      error=>{
        alert("sorry , error");
      },
      ()=>{}
    );
  
  
  }
  valid_username =  (control:AbstractControl)  :  {[key :string] :any } | null => {
 //   console.log("valid" +);
   // console.log("user"+this.users.some(x => x.UserName == this.formLogin.controls["UserName"].value));
    if (this.users.some(x => x.UserName == this.formLogin.controls["UserName"].value) || this.formLogin.controls["UserName"].value == "")
     return {'username' : true}
    else 
    return null;
 
  }
  
 oncontactchanged(type:number){
   
  if(type==1){

   this.formLogin.controls["Contact"].setValidators([Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(15)]);
   this.contect_choice = "Email";  
  }
  else if ( type == 2){
    this.formLogin.controls["Contact"].setValidators([Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]);
    this.contect_choice = "Phone";
    }

  this.formLogin.controls["Contact"].updateValueAndValidity();

 }
 
  login(){
    //this.set_user();
   //console.log(this.conction);
  // console.log(this.contect_choice);
  let loginModel:User=new User();
   
  Object.assign(loginModel,this.formLogin.value);

  console.log(loginModel);


 this._httpClient.post("http://localhost:30660/api/User",loginModel)
  .subscribe(
    response=>{
    
     this.cookieService.set( 'Username', this.formLogin.controls["UserName"].value );
     this.cookieService.set( 'Password', this.formLogin.controls["Password"].value );

     console.log( this.cookieService.get('Username'));
     console.log( this.cookieService.get('Password'));

      alert(response);
    },
    error=>{
      alert("sorry , error");
    },
    ()=>{}
  );
  


   


  }
 

}


/*
  this._httpClient.get(`http://localhost:30660/api/User?UserName=${loginModel.UserName}`)
  .subscribe(
    response=>{
    // console.log("on"+loginModel.UserName );

    if(response != null)
    {
      console.log("found");
   
    }
    else {
      console.log("Notfound");
    
    }
     // this.cookieService.set( 'Username', 'Hello' );
     //console.log( this.cookieService.get('Username'));
     // alert(response);
    },
    error=>{
      alert("sorry , error");
   
    },
    ()=>{}
  );*/


 // console.log(loginModel.UserName);
 // console.log("r"+this.isfound_username(loginModel));

 /*set_user(){
    this.conction.Name = this.formLogin.controls["Name"].value;
    this.conction.Password = this.formLogin.controls["Password"].value;
    this.conction.Address = this.formLogin.controls["Address"].value;
    this.conction.UserName = this.formLogin.controls["UserName"].value;

  }*/
 /*
    this._httpClient.get(`http://localhost:30660/api/User?UserName=${this.conction.UserName}`)
  .subscribe(
    response=>{
  console.log("oo"+this.conction.UserName);

    if(response != null)
    {
      console.log("found");
       return {'username' : true}
    }
    else {
      console.log("Notfound");

      return null;

    }
     // this.cookieService.set( 'Username', 'Hello' );
     //console.log( this.cookieService.get('Username'));
     // alert(response);
    },
    error=>{
      alert("sorry , error"); return {'username' : true}

    },
    ()=>{}
    
  );
  return {'username' : true}

*/
   /* const username :string = control.value;
    if(username == "fatma"){
      return null;
    }
    else{
      return {'username' : true}
    }*/


    
    /*

  this._httpClient.get(`http://localhost:30660/api/User?UserName=${this.conction.UserName}`)
  .subscribe(
    response=>{
  console.log("oo"+this.conction.UserName);

    if(response != null)
    {
      console.log("found");
    }
    else {
      console.log("Notfound");

    }
     // this.cookieService.set( 'Username', 'Hello' );
     //console.log( this.cookieService.get('Username'));
     // alert(response);
    },
    error=>{
      alert("sorry , error");
    },
    ()=>{}
  );*/


  /*
  isfound_username = (loginModel)=>{
    
  this._httpClient.get(`http://localhost:30660/api/User?UserName=${loginModel.UserName}`)
  .subscribe(
    response=>{
    // console.log("on"+loginModel.UserName );

    if(response != null)
    {
      console.log("found");
      return true;
    }
    else {
      console.log("Notfound");
    return false;
    }
     // this.cookieService.set( 'Username', 'Hello' );
     //console.log( this.cookieService.get('Username'));
     // alert(response);
    },
    error=>{
      alert("sorry , error");
      return false;
    },
    ()=>{}
  );
  }*/
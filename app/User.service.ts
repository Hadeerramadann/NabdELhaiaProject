import { Login } from './login/login.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged=new Subject<boolean>();
  constructor(private cookieService: CookieService) { 
    this.changeloggedStatus(this.islogged());
  }
  login(model:Login)
  {
    console.log("login");
    localStorage.setItem("Username",model.Name);
    this.cookieService.set( 'Username',model.Name);

    this.changeloggedStatus(true);
  }
  logout()
  {  
    console.log("logout");
    localStorage.setItem("Username","");
    this.cookieService.set( 'Username', "");
     

    //localStorage.removeItem("Username");
    this.changeloggedStatus(false);
  }
  islogged():boolean
  {
    let email= localStorage.getItem("Username");
    if(email=="")
    return false
    else
    return true;
  }
  getLoggedStatus(){
   return this.logged.asObservable();
  }
 changeloggedStatus(status:boolean)
 {
  this.logged.next(status); 
 }

}

import { FormControl } from '@angular/forms';

let isfound_username = (loginModel)=>{
    
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
    }
   
export function validateUserName(c: FormControl) {
    /*
  let EMAIL_REGEXP = "...";

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };*/
}

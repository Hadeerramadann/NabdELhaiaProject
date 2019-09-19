import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/User.service';
import { HttpClient } from '@angular/common/http';
import { Post } from './request.model';
import { Comment } from './comment.model';
import { CookieService } from 'ngx-cookie-service';
   

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  constructor(private _userservice:UserService ,private _httpClient:HttpClient ,private cookieService: CookieService) { }
 // count:number =0;
  posts:Post[] ;
 comments:Comment[]=[];
 username:string;
  ngOnInit() {
    
    this.username =this.cookieService.get('Username');
     console.log( this.cookieService.get('Username'));
    //http://localhost:30660/api/Post?username=fatma
    this._httpClient.get(`http://localhost:30660/api/Post?username=${this.cookieService.get('Username')}`)
    .subscribe(
      response=>{
      this.posts = response as Post [];  
    
      this.posts.forEach(element =>  {
       element.Comments.forEach (e =>  {
        this.comments.push(e);
        });
      });
      console.log(this.comments);
      },
      error=>{
        alert("sorry , error");
      },
      ()=>{}
    );
  }
  c(){
    this._userservice.logout();
  }

  getcommentscount():number{
   
    return    this.comments.length;
  }
}

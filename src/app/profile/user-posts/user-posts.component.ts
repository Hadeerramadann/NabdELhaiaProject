import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './request.model';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts : Post [] =[];
  bloodtype:string;
  constructor(private _httpClient:HttpClient ,private _activatedRoute:ActivatedRoute ,private cookieService: CookieService ) { }

  ngOnInit() {
    console.log( this.cookieService.get('Username'));
   this._httpClient.get(`http://localhost:30660/api/Post?username=${this.cookieService.get('Username')}`)
      .subscribe(
        response=>{
        this.posts = response as Post [];
         console.log(this.posts);
        },
        error=>{
          alert("sorry , error");
        },
        ()=>{}
      );

    

    /*
    this._httpClient.get("http://localhost:30660/api/Post")
    .subscribe(
      response=>{
      this.posts = response as Post [];
      this.posts.forEach(element => {
        console.log(element.Text);
        console.log(element.Comments);

      });
      },
      error=>{
        alert("sorry , error");
      },
      ()=>{}
    );*/
  }


}

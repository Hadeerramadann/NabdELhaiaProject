import { Component, OnInit , Input } from '@angular/core';
import {Post} from './request.model';
import { CookieService } from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import{Comment} from './comment.model';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  @Input() post_content :Post;
  comment_text:string;
  comment:Comment= new Comment ()  ;
  flag:boolean = false;
  flag1:boolean = true;
  
  comments:Comment[] ;
  likes:number;
  constructor(private cookieService: CookieService , private _httpClient:HttpClient,private router: ActivatedRoute,private _router:Router) {
    this.comment_text="";
  this.likes =0;
   }

  ngOnInit() {
    
 
  }
  
   likecount(){

     this.likes ++;
     return this.likes ;

   }


 deletpost(){
this.flag1 =!this.flag1;
 }
  Setflag(){
    this.flag = !this.flag;
  }
  
  post_comment = (Post_ID:number) => {
//console.log("com"+this.comment_text);

    let today = new Date();
   // console.log(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +"T"+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() );
    //console.log("username"+this.cookieService.get('Username'));
    let x =this.cookieService.get('Username').toString();
   

    this.comment.UserName = x;
    this.comment.Text =this.comment_text;
    this.comment.Post_ID = Post_ID;
    this.comment.Date =  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +"T"+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() ;//new Date().getDate.toString() + new Date().getTime.toString()  ;

    console.log("cooooooooment"+this.comment.UserName + "   "+this.comment.Text +"  "+ this.comment.Date + "  " + this.comment.Post_ID);
   // console.log("enter" +this.cookieService.get('Username') + "postId is "  + Post_ID);
   this.post_content.Comments.push(this.comment);
    
    this._httpClient.post("http://localhost:30660/api/Comment",  this.comment)
   .subscribe(
   response=>{
   // this.router.navigateByUrl('profile/Posts')
   this.post_content.Comments.push(this.comment);

     alert(response);
   //  this.comment_text ="";
     //this._router.navigateByUrl('/profile');

   },
   error=>{
    // alert("sorry , error");
   },
   ()=>{}
 );
 

  }

}

import { Component, OnInit } from '@angular/core';
import {Post} from '../post-content/request.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Comment} from '../post-content/comment.model'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-post-content-comment',
  templateUrl: './post-content-comment.component.html',
  styleUrls: ['./post-content-comment.component.css']
})
export class PostContentCommentComponent implements OnInit {
  post_content :Post;
  post_id:number;
  flag:boolean;
  comment:Comment= new Comment ()  ;
  comment_text:string;
 
  constructor( private _httpClient:HttpClient ,private _activatedRoute:ActivatedRoute ,private cookieService: CookieService) { 
    this.comment_text="";

  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.post_id= +params.get('id'); 
      console.log("bllodType"+ this.post_id);
      this._httpClient.get(`http://localhost:30660/api/Post?PostId=${this.post_id}`)
      .subscribe(
        response=>{
        this. post_content = response as Post ;
        
        },
        error=>{
          alert("sorry , error");
        },
        ()=>{}
      );
    });

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

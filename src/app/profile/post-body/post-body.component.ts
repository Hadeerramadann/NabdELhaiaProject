import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './request.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {
  posts : Post [] =[];
  bloodtype:string;
  
  constructor(private _httpClient:HttpClient ,private _activatedRoute:ActivatedRoute ) { }

  ngOnInit() {

    
    this._activatedRoute.paramMap.subscribe(params=>{
      this.bloodtype= params.get('bloodtype'); 
      console.log("bllodType"+ this.bloodtype);
      this._httpClient.get(`http://localhost:30660/api/Post?blood=${this.bloodtype}`)
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
      );
    });

    

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

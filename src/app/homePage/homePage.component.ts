import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

//declare var jquery:any;
//declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'  ]
})
export class HomePageComponent implements OnInit {
  title:string;
  constructor() { }

  ngOnInit() {
  
    $(function(){
      //take id of the audio and make a variable
    var audio = $("#makesound")[0];
    
      //eventhandler on hover with play() function
    $("#xyz").mouseenter(function() {
      audio.play();
      console.log("it works");
    });
      
      //additional eventhandler on button click
      $("#demo").click(function(){
        console.log("was clicked");
        audio.play();
        console.log(audio);
      })
      
      });
    




  }
  

}

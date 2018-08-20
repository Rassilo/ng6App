import { Component, OnInit, AfterContentInit } from '@angular/core';
import Parallax from 'parallax-js';
//declare var Parallax:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng6App';



  ngOnInit(){
    console.log("eeee");
    const scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }
  AfterContentInit(){
    console.log("eeeeh");
    const scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }

}

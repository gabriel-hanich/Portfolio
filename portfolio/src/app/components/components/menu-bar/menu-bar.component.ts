import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    addEventListener('scroll', (e: Event)=>{
      if(window.scrollY > 50){
        (document.getElementById("menu-bar") as HTMLElement).style.height = "50px";
        var textElems = document.getElementsByClassName("menu-text");
        for(var i=0; 1<textElems.length; i++){
          (textElems[i] as HTMLElement).style.fontSize = "1.5rem"
        }
      }else{
        (document.getElementById("menu-bar") as HTMLElement).style.height = "80px";
        var textElems = document.getElementsByClassName("menu-text");
        for(var i=0; 1<textElems.length; i++){
          (textElems[i] as HTMLElement).style.fontSize = "2rem"
        }
      }

    });
  }

}

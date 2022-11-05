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
      try{
        if(window.scrollY > 50){
          console.log("SHRINKING");
          (document.getElementById("menu-bar") as HTMLElement).style.height = "50px";
          var textElems = document.getElementsByClassName("menu-text");
          for(var i=0; 1<textElems.length; i++){
            (textElems[i] as HTMLElement).style.fontSize = "1.5rem"
          }
        }else{
          console.log("EXPANDING");
          (document.getElementById("menu-bar") as HTMLElement).style.height = "80px";
          var textElems = document.getElementsByClassName("menu-text");
          for(var i=0; 1<textElems.length; i++){
            (textElems[i] as HTMLElement).style.fontSize = "2rem"
          }
        }
      } catch(TypeError){
        return
      }

    });
  }

  scrollPage(position: number){
    window.scrollTo({top: position * window.innerHeight, left: 0, behavior: 'smooth'});
  }

}

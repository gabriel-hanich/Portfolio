import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    document.addEventListener("scroll", (ev: Event)=>{
      console.log(window.scrollY)
      if(window.scrollY > 10){
        (document.getElementById("projectScroll") as HTMLElement).style.opacity = '0';
      }else{
        (document.getElementById("projectScroll") as HTMLElement).style.opacity = '1';
      }
    });
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public scrollNumber: number = 0;
  public windowHeight: number = window.innerHeight;
  constructor() { }

  ngOnInit(): void {
    addEventListener("scroll", (e: Event)=>{
      if(window.scrollY){
        this.scrollNumber = window.scrollY - window.innerHeight;
        console.log(this.scrollNumber)
      }
    });
  }

}

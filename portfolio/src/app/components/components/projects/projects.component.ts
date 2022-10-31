import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public scrollNumber: number = 0;
  private scrollOffset: number = 1000;
  constructor() { }

  ngOnInit(): void {
    addEventListener("scroll", (e: Event)=>{
      if(window.scrollY){
        this.scrollNumber = window.scrollY - this.scrollOffset;
      }
    });
  }

}

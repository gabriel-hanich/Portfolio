import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from 'src/app/services/connections/connections.service';
import { DataService } from 'src/app/services/data/data.service';
import { Experience, Project } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    document.addEventListener("scroll", (ev: Event)=>{
      console.log(window.scrollY)
      if(window.scrollY > 10){
        (document.getElementById("scrollContainer") as HTMLElement).style.opacity = '0';
      }else{
        (document.getElementById("scrollContainer") as HTMLElement).style.opacity = '1';
      }
    });
  }

}

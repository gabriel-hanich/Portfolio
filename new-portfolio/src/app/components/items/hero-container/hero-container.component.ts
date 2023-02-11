import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToProjects(): void {
    (document.getElementById("work") as HTMLElement).scrollIntoView({behavior: 'smooth'});
  }

}

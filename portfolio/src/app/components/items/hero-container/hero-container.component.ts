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

  scrollToSection(sectionName: string): void {
    (document.getElementById(sectionName) as HTMLElement).scrollIntoView({behavior: 'smooth'});
    console.log(sectionName)
  }

}

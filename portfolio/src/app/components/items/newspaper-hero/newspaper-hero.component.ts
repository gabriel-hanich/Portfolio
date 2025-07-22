import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newspaper-hero',
  templateUrl: './newspaper-hero.component.html',
  styleUrls: ['./newspaper-hero.component.scss']
})
export class NewspaperHeroComponent implements OnInit {
  public dateString: String = ""
  constructor() { }

  ngOnInit(): void {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.dateString = (new Date()).toLocaleDateString("EN-AU", {weekday: "long", day:"numeric", month:"long"})
  }

}

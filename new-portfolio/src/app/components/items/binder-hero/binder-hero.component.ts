import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binder-hero',
  templateUrl: './binder-hero.component.html',
  styleUrls: ['./binder-hero.component.scss']
})
export class BinderHeroComponent implements OnInit {
  public stickySvgs: Array<string> = ["curve.svg", "building.svg", "flag.svg", "laptop.svg"]
  public age: number = Math.floor((Date.now() - 1159790400000) / 3.154e+10)
  public year: number = new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
    // Calculate Age
  }

}

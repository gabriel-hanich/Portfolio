import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruler-heading',
  templateUrl: './ruler-heading.component.html',
  styleUrls: ['./ruler-heading.component.scss']
})
export class RulerHeadingComponent implements OnInit {
  @Input() titleText:string = ""
  @Input() pargraphText:string = ""

  public viewBoxWidth: number = 100
  public viewBoxHeight: number = 500
  constructor() { }

  ngOnInit(): void {
  }

}

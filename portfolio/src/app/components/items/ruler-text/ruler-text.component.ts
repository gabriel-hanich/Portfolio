import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruler-text',
  templateUrl: './ruler-text.component.html',
  styleUrls: ['./ruler-text.component.scss']
})
export class RulerTextComponent implements OnInit {
  @Input() text: string  =""
  @Input() svgURL: string  =""

  constructor() { }

  ngOnInit(): void {
  }

}

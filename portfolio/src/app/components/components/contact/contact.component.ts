import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeText(id: string, stringData: string){
    const elem: HTMLElement = (document.getElementById(id) as HTMLElement);
    navigator.clipboard.writeText(stringData)
    var startingText: string = elem.innerHTML;
    elem.classList.add("rotate");
    setTimeout(()=>{
      elem.innerHTML = "Copied";
      setTimeout(()=>{
        elem.innerHTML = startingText;
        setTimeout(()=>{
          elem.classList.remove("rotate");
        }, 300)
      }, 2300)
    }, 300)
  }

}

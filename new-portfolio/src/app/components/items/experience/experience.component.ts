import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const barsCollection: HTMLCollectionOf<Element> = document.getElementsByClassName("experience-bar-inner");
    const bars: HTMLElement[] = Array.prototype.slice.call( barsCollection )
    bars.forEach((bar: HTMLElement)=>{
      let observer = new IntersectionObserver((elements)=>{
        elements.forEach((element)=>{
          if(element.isIntersecting){
            this.updateBar(element.target as any)
          }
        });
      });
      observer.observe(bar);
    });
  }

  updateBar(bar: HTMLElement): void{
    console.log(bar)
    let delay = parseInt(bar.getAttribute("data-animationDelay") as string)
    console.log("STARTING " + delay)
    setTimeout(()=>{
      console.log("ENDING " + delay)
      bar.style.width = bar.getAttribute("data-maxWidth") as string
    }, delay * 1000)
  }

}

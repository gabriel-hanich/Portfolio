import { Component, OnInit } from '@angular/core';
import { experienceTime } from 'src/types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  
})
export class ExperienceComponent implements OnInit {
  public barList: experienceTime[] = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      let svgLinks: string[] = ["https://www.svgrepo.com/show/372929/python.svg", "https://www.svgrepo.com/download/106553/java.svg", "https://www.svgrepo.com/show/473670/javascript.svg"]
      let labels: string[] = ["Python", "Java", "JavaScript"];
      let startDates: string[] = ["2020-04-01T11:49:41.000Z", "2021-08-15T12:49:41.000Z", "2022-03-10T11:49:41.000Z"]

      let maxPXWidth = (document.getElementById("experienceContainer") as HTMLElement).getBoundingClientRect()['width']

      let masterStart: Date = new Date(startDates[0])
      labels.forEach((label: string, index: number)=>{
        // Calculate time from start date
        let startDate: Date = new Date(startDates[index]);
        let duration = new Date().getTime() - startDate.getTime();
        this.barList.push({
          "name": label,
          "svg": svgLinks[index],
          "width": `calc(${(duration / (new Date().getTime() - masterStart.getTime())) * ((maxPXWidth - 150) / maxPXWidth) * 100}% + 150px)`,
          "duration": this.convertToString(duration)
        })
      });

      setTimeout(()=>{
        this.registerScrollEffect();
      }, 500);
    }, 0);
  }

  registerScrollEffect(): void{
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
    setTimeout(()=>{
      bar.style.width = "var(--bar-width)"
    }, parseInt(bar.id.replace("bar", "")) * 500)
  }

  convertToString(seconds: number): string{ // Convert number of seconds into time string
    var resultingString: string = ""    
    if (seconds > (31536000 * 1000)){
      var yrCount = Math.floor(seconds / (31536000 * 1000));
      if(yrCount == 1){
        resultingString +=  yrCount + " Year "
      }else{
        resultingString +=  yrCount + " Years "
      }
      seconds = seconds - (yrCount * 31536000 * 1000)
    }
    if (seconds > (2592000 * 1000)){
      var mthCount = Math.floor(seconds / (2592000 * 1000))
      if(mthCount == 1){
        resultingString +=  mthCount + " Month"
      }else{
        resultingString +=  mthCount + " Months"
      }
      seconds = seconds - (Math.floor(seconds / (2592000 * 1000)) * 2592000)
    }
    return resultingString
  }
}

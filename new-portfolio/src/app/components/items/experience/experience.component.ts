import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Experience } from 'src/types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  
})
export class ExperienceComponent implements OnInit {
  public barList: Experience[] = [];

  constructor(private globalData: DataService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      let experienceList: Experience[] = this.globalData.getExperienceList();
      let maxPXWidth = (document.getElementById("experienceContainer") as HTMLElement).getBoundingClientRect()['width']
      let masterStart: Date = experienceList[0].startDate;
      
      experienceList.forEach((experience)=>{
        let duration = new Date().getTime() - experience["startDate"].getTime();
        this.barList.push({
          "name": experience["name"],
          "svg": experience["svg"],
          "startDate": experience["startDate"],
          "width": `calc(${(duration / (new Date().getTime() - masterStart.getTime())) * ((maxPXWidth - 150) / maxPXWidth) * 100}% + 150px)`,
          "duration": this.convertToString(duration)
        })
      })

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

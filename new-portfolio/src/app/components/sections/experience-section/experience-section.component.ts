import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Experience, FullExperience, SiteData } from 'src/types';


@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {
  @Input() sitePromise:Promise<SiteData>
  public experienceList: FullExperience[] = []

  constructor() { }

  ngOnInit(): void {
    this.sitePromise.then((siteData)=>{
      this.experienceList = siteData["experience"].map(this.calcAllData)

      this.experienceList.forEach((experience:FullExperience)=>{
        experience.prettifiedDate = this.calculateDateStr(experience.startDate)
      })
      this.experienceList = this.calculateBarWidth(this.experienceList)
      this.experienceList.sort((a:FullExperience, b:FullExperience)=>{
        return a.startDate.getTime() - b.startDate.getTime()
      })
    })

  }

  calcAllData(dData:Experience): FullExperience{
    const [year, month, day] = dData['strDate'].split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    
    return {
      title: dData["title"],
      icon: dData["icon"],
      strDate: dData["strDate"],
      prettifiedDate: "",
      startDate: dateObj,
      barWidth: '0'
    }
  }

  calculateDateStr(startDate: Date): string{
    let yearCount: number = 0
    let monthCount: number = 0

    let deltaSeconds = (new Date().getTime() - startDate.getTime()) / 1000
    let dateStr: string = ""

    if(deltaSeconds >= 31536000){
      yearCount = Math.floor(deltaSeconds / 31536000)
      deltaSeconds = deltaSeconds % 31536000
    }
    monthCount = Math.floor(deltaSeconds / (31536000/12))

    if (monthCount >= 12){
      yearCount += 1
      monthCount = 0
    }
    if (yearCount != 0){
      dateStr += yearCount.toString()
      if (yearCount == 1){
        dateStr += " Year "
      }else{
        dateStr += " Years "
      }
    }
    dateStr += monthCount
    if (monthCount == 1){
      dateStr += " Month "
    }else{
      dateStr += " Months "
    }
    return dateStr
  }

  calculateBarWidth(experienceList:FullExperience[]):FullExperience[]{
    // Determine largest deltaSeconds
    let maxDelta:number = 0
    experienceList.forEach((experience:FullExperience)=>{
      if(new Date().getTime() - experience.startDate.getTime() > maxDelta){
        maxDelta = new Date().getTime() - experience.startDate.getTime()
      }
    })
    experienceList.forEach((experience:FullExperience)=>{
      let currentDelta: number = new Date().getTime() - experience.startDate.getTime()
      experience.barWidth = (Math.round(currentDelta / maxDelta * 1000) / 10).toString() + "%"
    })
    
    return experienceList
  }

}

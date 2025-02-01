import { Component, OnInit } from '@angular/core';

type Experience = {
  title: string,
  svgURL: string,
  startDate: Date,
  dateStr: string,
  barWidth: string
}

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  public experienceList: Experience[] = []

  constructor() { }

  ngOnInit(): void {
    this.experienceList =[
      {
        "title": "Python",
        "svgURL": "https://www.svgrepo.com/show/372929/python.svg",
        "startDate": new Date(2020, 0, 1),
        "dateStr": "",
        "barWidth": ""
      },
      {
        "title": "JavaScript",
        "svgURL": "https://www.svgrepo.com/show/473670/javascript.svg",
        "startDate": new Date(2021, 2, 3),
        "dateStr": "",
        "barWidth": ""
      },
      {
        "title": "Angular",
        "svgURL": "https://www.svgrepo.com/show/503165/angular.svg",
        "startDate": new Date(2022, 1, 2),
        "dateStr": "",
        "barWidth": ""
      },
      {
        "title": "Type Script",
        "svgURL": "https://www.svgrepo.com/show/342317/typescript.svg",
        "startDate": new Date(2022, 1, 2),
        "dateStr": "",
        "barWidth": ""
      },
    ]

    this.experienceList.forEach((experience)=>{
      experience['dateStr'] = this.calculateDateStr(experience.startDate)
    })
    this.experienceList = this.calculateBarWidth(this.experienceList)
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

  calculateBarWidth(experienceList:Experience[]):Experience[]{
    // Determine largest deltaSeconds
    let maxDelta:number = 0
    experienceList.forEach((experience:Experience)=>{
      if(new Date().getTime() - experience.startDate.getTime() > maxDelta){
        maxDelta = new Date().getTime() - experience.startDate.getTime()
      }
    })
    experienceList.forEach((experience:Experience)=>{
      let currentDelta: number = new Date().getTime() - experience.startDate.getTime()
      experience.barWidth = (Math.round(currentDelta / maxDelta * 1000) / 10).toString() + "%"
    })
    
    return experienceList
  }

}

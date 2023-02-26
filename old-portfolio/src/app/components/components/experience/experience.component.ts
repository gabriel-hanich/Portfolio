import { Component, OnInit } from '@angular/core';
import * as console from 'console';
import * as experienceData from "../../../../assets/experience.json";

interface Section{
  name: string,
  startDate: string,
  iconName: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public barList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    var now: number  = Date.now();

    const experience: Section[] = experienceData as Section[];

    const maxDelay = (now - Date.parse(experience[0]['startDate']))
    for(var i=0; i<experience.length; i++){
      var delay: number = now - Date.parse(experience[i]['startDate'])
      this.barList.push({
        "name": experience[i]['name'],
        'timestr': this.convertToString(delay),
        'width': (delay / maxDelay)  * 100,
        'ico': experience[i]["iconName"]
      })
    }
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

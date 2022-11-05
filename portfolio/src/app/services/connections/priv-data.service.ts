import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { packet } from 'src/app/types';
@Injectable({
  providedIn: 'root'
})
export class PrivDataService {

  constructor() { }

  checkCode(): Observable<boolean>{
    return new Observable<boolean>((subscriber)=>{
      setTimeout(()=>{
        subscriber.next(true)
      }, 10)
    });
  }

  getData(): Observable<packet>{
    return new Observable<packet>((subscriber)=>{
      subscriber.next(
        {
          "fullName": "SAMPLE PERSON",
          "introText": "SAMPLE INTRO",
          "aboutText": "SAMPLE ABOUT TEXT",
          "achievementList": [
            {
              "title": "SAMPLE ACHIEVEMENT",
              "explainer": "SAMPLE ACHIEVEMENT EXPLAINER",
              "timePeriod": "SAMPLE TIME PERIOD"
            }
          ],
          "educationList": [
            {
              "title": "SAMPLE EDUCATION",
              "explainer": "SAMPLE EDUCATION EXPLAINER",
              "timePeriod": "SAMPLE TIME PERIOD"
            },
          ],
          "resumeLink": ""
        }
      );
    })
  }
}

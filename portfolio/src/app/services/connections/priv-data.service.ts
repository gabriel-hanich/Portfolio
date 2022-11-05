import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrivDataService {

  constructor() { }

  checkCode(): Observable<boolean>{
    return new Observable<boolean>((subsriber)=>{
      setTimeout(()=>{
        subsriber.next(true)
      }, 1000)
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SiteData } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class GetSiteDataService {
  constructor(private httpClient: HttpClient) { }

  getSiteData(): Promise<SiteData>{
    return new Promise(async(resolve, reject)=>{
        console.log("DOWNLOADING DATA")
        this.httpClient.get(environment.dataStore).subscribe((event)=>{
           resolve(event as SiteData)
        })
    })
  }

}

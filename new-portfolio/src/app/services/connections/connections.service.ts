import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promises, resolve } from 'dns';
import { environment } from 'src/environments/environment';
import { Experience, Project } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private httpClient: HttpClient) { }

  getProjects(): Promise<any[]>{
    return new Promise(async(resolve, reject)=>{
      this.httpClient.get(environment.backendUrl + "/projects").subscribe((res)=>{
        resolve(res as any[])
      });
    });
  }

  getExperience(): Promise<any[]>{
    return new Promise(async(resolve, reject)=>{
      this.httpClient.get(environment.backendUrl + "/experiences").subscribe((res)=>{
        resolve(res as any[])
      });
    });
  }

  getProjectData(projectID: string): Promise<any>{
    return new Promise(async(resolve, reject)=>{
        this.httpClient.get(environment.backendUrl + "/projects/" + projectID).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  private getDetails(): Promise<string>{
    return new Promise<any>((resolve, reject)=>{
      // Get User details to prevent Brute force attacks
      this.httpClient.get("http://api.ipify.org/?format=json").subscribe(
        data => resolve((data as any)['ip']),
        error => resolve(error)
      );
    });
  }

  verifyLogin(userName: string, pin: string): Promise<any>{
    return new Promise<any>(async(resolve, reject)=>{
      let details = await this.getDetails();
      if(typeof details != "string"){
        details = ""
      }
      console.log(details)
      this.httpClient.post(environment.secureURL + "/verify",
        {
          "details": details,
          "username": userName,
          "pin": pin
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })
        }
      ).subscribe((res: any)=>{
        resolve(res);
      });
    });
  }

}

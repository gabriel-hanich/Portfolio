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

  getProjects(siteUrl?: string): Promise<any[]>{
    let url = environment.backendUrl;
    if(siteUrl){
      url = siteUrl
    }
    return new Promise(async(resolve, reject)=>{
      this.httpClient.get(url + "/projects").subscribe((res)=>{
        resolve(res as any[])
      });
    });
  }

  getExperience(siteUrl?: string): Promise<any[]>{
    let url = environment.backendUrl;
    if(siteUrl){
      url = siteUrl
    }
    return new Promise(async(resolve, reject)=>{
      this.httpClient.get(url + "/experiences").subscribe((res)=>{
        resolve(res as any[])
      });
    });
  }

  getProjectData(projectID: string): Promise<any>{
    return new Promise(async(resolve, reject)=>{
        this.httpClient.get(environment.dataStoreUrl).subscribe(
          {
            next: data => {
              (data as any)["projects"].forEach((proj: any) => {
                  if(proj["id"].toString() === projectID){
                    resolve(proj);
                  }
              });
              resolve("ERROR");
            },
            error: error => reject(error)
          }
      )
    })
  }

  getSiteData(): Promise<any>{
    return new Promise(async(resolve, reject)=>{
      this.httpClient.get(environment.dataStoreUrl).subscribe(
        {
          next: data => resolve(data),
          error: error => reject(error)
        }
      )
    });
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

  verifyAdmin(userName: string, pin: string): Promise<any>{
    return new Promise<any>(async(resolve, reject)=>{
      let details = await this.getDetails();
      if(typeof details != "string"){
        details = ""
      }
      this.httpClient.post(environment.secureURL + "/admin/verify",
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

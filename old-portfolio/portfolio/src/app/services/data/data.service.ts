import { Injectable } from '@angular/core';
import { Experience, Project } from 'src/types';
import { ConnectionsService } from '../connections/connections.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projectList: Project[] = [];
  private experiences: Experience[] = [];
  private siteData: any = [];
  constructor(private connections: ConnectionsService) { }

  setSiteData(siteData: any): void{
    this.siteData = siteData;
  }

  setProjectList(projectList: Project[]): void{
    this.projectList = projectList;
  }
  getProjectList(): Project[]{
    if(this.projectList.length === 0){
      this.connections.getProjects().then((res)=>{
        this.projectList = res;
      });
    }
    return this.projectList
  }
  setExperienceList(experiences: Experience[]): void{
    this.experiences = experiences;
  }
  getExperienceList(): Experience[]{
    return this.experiences
  }
}

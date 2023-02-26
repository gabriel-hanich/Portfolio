import { Injectable } from '@angular/core';
import { Experience, Project } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projectList: Project[] = [];
  private experiences: Experience[] = [];
  private siteData: any = [];
  constructor() { }

  setSiteData(siteData: any): void{
    this.siteData = siteData;
  }

  setProjectList(projectList: Project[]): void{
    this.projectList = projectList;
  }
  getProjectList(): Project[]{
    return this.projectList
  }
  setExperienceList(experiences: Experience[]): void{
    this.experiences = experiences;
  }
  getExperienceList(): Experience[]{
    return this.experiences
  }
}

import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from 'src/app/services/connections/connections.service';
import { DataService } from 'src/app/services/data/data.service';
import { Experience, Project } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hasLoaded: boolean = false;
  
  constructor(private connections: ConnectionsService, private globalData: DataService) { }

  ngOnInit(): void {
    this.connections.getProjects().then((projects: any[])=>{
      let projectsList: Project[] = [];
      projects.forEach((project: any)=>{
        projectsList.push(
          {
            "id": project["id"],
            "name": project["projectName"],
            "excerpt": project["excerpt"]["rendered"].replace(/<[^>]+>/g, ''),
            "description": project["projectDescription"],
            "importantRank": parseInt(project["importantRank"])
          }
        );
      });
      projectsList.sort((a, b)=> b.importantRank - a.importantRank);
      this.globalData.setProjectList(projectsList);
      this.hasLoaded = true;
    });

    this.connections.getExperience().then((experiences: any[])=>{
      let experienceList: Experience[] = [];
      experiences.forEach((experience)=>{
        experienceList.push(
          {
            "name": experience["experienceLabel"],
            "startDate": new Date(experience["experienceStart"]),
            "svg": experience["experienceIcon"],
            "duration": "",
            "width": "0"
          }
        )
      });
      experienceList.sort((a, b)=> a.startDate.getTime() - b.startDate.getTime());
      this.globalData.setExperienceList(experienceList)
    });
  }

}

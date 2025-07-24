import { Component } from '@angular/core';
import { Experience, Project } from 'src/types';
import { ConnectionsService } from './services/connections/connections.service';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-portfolio';

  public hasLoaded: boolean = false;
  
  constructor(private connections: ConnectionsService, private globalData: DataService) { }

  ngOnInit(): void {
    this.connections.getSiteData().then((res: any)=>{
      let experienceList: Experience[] = [];
      res["experience"].forEach((exp: any)=>{
        experienceList.push(
          {
            "name": exp["experienceLabel"],
            "startDate": new Date(exp["experienceStart"]),
            "svg": exp["experienceIcon"],
            "duration": "",
            "width": "0"
          }
        )
      });
      let projectsList: Project[] = [];
      res["projects"].forEach((proj: any)=>{
        projectsList.push({
              "id": proj["id"],
              "name": proj["projectName"],
              "excerpt": proj["excerpt"]["rendered"].replace(/<[^>]+>/g, ''),
              "description": proj["projectDescription"],
              "importantRank": parseInt(proj["importantRank"])
            }
          );
      });

      projectsList.sort((a, b)=> b.importantRank - a.importantRank);
      experienceList.sort((a, b)=> a.startDate.getTime() - b.startDate.getTime());
      this.globalData.setSiteData(res);
      this.globalData.setExperienceList(experienceList);
      this.globalData.setProjectList(projectsList);
      this.hasLoaded = true;
    });
  }
}

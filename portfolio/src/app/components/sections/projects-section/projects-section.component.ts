import { Component, Input, OnInit } from '@angular/core';
import { GetSiteDataService } from 'src/app/services/getSiteData/get-site-data.service';
import { Project, SiteData } from 'src/types';


@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  @Input() sitePromise: Promise<SiteData>

  public projectsList: Project[] = []
  public currentField: string = "all"
  public fields: string[] = ["all"]
  public randNums: number[] = []


  constructor(private getSiteData: GetSiteDataService) { }

  ngOnInit(): void {
    this.sitePromise.then((data)=>{
      this.projectsList = data["projects"]

      this.projectsList.forEach((val)=>{
        this.randNums.push(Math.random())
      })
  
      this.fields = this.fields.concat(this.determineFields(this.projectsList))
    })


  }

  determineFields(projectsList: Project[]):string[]{
    let fieldsList: string[] = [];
    projectsList.forEach((project: Project)=>{
      if (!fieldsList.includes(project.field)){
        fieldsList.push(project.field)
      }
    })
    
    return fieldsList

  }

}

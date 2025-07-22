import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetSiteDataService } from 'src/app/services/getSiteData/get-site-data.service';
import { Project } from 'src/types';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  public projectSlug: string|null = ""
  public projectData:Project;
  public title: string = ""
  public icoList: string[] = []

  
  constructor(private route: ActivatedRoute, private siteDataService: GetSiteDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const slug = params.get("projectSlug")
      this.projectSlug = slug

      this.siteDataService.getSiteData().then((sData)=>{
        sData["projects"].forEach(proj => {
          if(proj.slug == this.projectSlug){
            this.projectData = proj
          }
        });
      })
    })


    this.icoList = [
      "https://www.svgrepo.com/show/372929/python.svg",
      "https://www.svgrepo.com/show/508921/java.svg",
      "https://www.svgrepo.com/show/473729/mongodb.svg",
      "https://www.svgrepo.com/show/342317/typescript.svg",
      "https://www.svgrepo.com/show/473537/angular.svg",
    
    ]
  }

}

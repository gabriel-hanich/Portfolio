import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Project } from 'src/types';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  public projectsList: Project[] = [];

  constructor(private router: Router, private globalData: DataService) { }

  ngOnInit(): void {
    let allProjectList = this.globalData.getProjectList();
    this.projectsList = allProjectList.filter((project: Project) => project.importantRank === 3) 
    setTimeout(()=>{
      this.registerScrollEffect();
    }, 500)
  }

  registerScrollEffect(): void{
    const parent: HTMLElement = document.getElementById("projectList") as HTMLElement;
    let children: HTMLElement[] = [];
    for(var i=0; i<parent.childElementCount; i++){
      children.push((parent.children.item(i) as HTMLElement))
    }

    document.addEventListener("scroll", (event)=>{
      children.forEach((child: HTMLElement)=>{
        let content: HTMLElement = child.children.item(0) as HTMLElement
        let title: HTMLElement = child.children.item(1) as HTMLElement
        let pos: number = child.getBoundingClientRect()['y'] - window.innerHeight / 2
        if(pos > 400){
          content.style.transform = "translateX(50%)";
          title.style.transform = "translateX(-50%)";
        }else if(pos < 0){
          content.style.transform = "translateX(0%)";
          title.style.transform = "translateX(0%)";
        }else{
          content.style.transform = "translateX(" + (50 * (pos/400)).toString() +  "%)";
          title.style.transform = "translateX("  + (-50 * (pos/400)).toString() + "%)";
        }

      });
    });
  }

  goToProject(projectId: string): void {
    this.router.navigateByUrl("project/" + projectId)
  }

}

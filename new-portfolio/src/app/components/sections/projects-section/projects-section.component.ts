import { Component, OnInit } from '@angular/core';

type Project = {
  slug: string;
  field:string;
  dotColor: string;
  title: string;
  about: string;
  randFloat: number;
}

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  public projectsList: Project[] = []
  public currentField: string = "all"
  public fields: string[] = ["all"]

  constructor() { }

  ngOnInit(): void {
    this.projectsList = [
      {"slug": "lookingGlass",field:"programming", "dotColor": "#c281e3", "title": "Looking Glass", "about": "New method of organising files", "randFloat": Math.random()},
      {"slug": "computePower",field:"programming", "dotColor": "#c281e3", "title": "Compute Power", "about": "Using Computer Simulation and Artificial Intelligence to simulate the NSW power grid", "randFloat": Math.random()},
      {"slug": "theySpeak",field:"programming", "dotColor": "#c281e3", "title": "They Speak for Us", "about": "Big Data analysis of the News", "randFloat": Math.random()},
      {"slug": "pageTurner",field:"programming", "dotColor": "#c281e3", "title": "Page Turner", "about": "Algorithmic analysis of the Senate and House Hansards in the Australian Federal Parliament", "randFloat": Math.random()},
      {"slug": "sydmun23",field:"politics", "dotColor": "#44b5cf", "title": "SydMUN23", "about": "At GongMUN23 I debated the repatriation of cultural artifacts, representing Jamaica. ", "randFloat": Math.random()},
      {"slug": "gongmun23",field:"politics", "dotColor": "#44b5cf", "title": "GongMUN23", "about": "At SydMUN23 I drafted international legislation to address torture, representing Chile", "randFloat": Math.random()},
      {"slug": "gongmun24",field:"politics", "dotColor": "#44b5cf", "title": "SydMUN24", "about": "At SydMUN24 I engaged with issues relating to misinformation and self-determination, representing Haiti", "randFloat": Math.random()},
    ]
    this.fields = this.fields.concat(this.determineFields(this.projectsList))
    console.log(this.fields)
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

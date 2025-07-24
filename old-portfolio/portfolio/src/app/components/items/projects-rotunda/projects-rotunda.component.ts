import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Project } from 'src/types';

@Component({
  selector: 'app-projects-rotunda',
  templateUrl: './projects-rotunda.component.html',
  styleUrls: ['./projects-rotunda.component.scss']
})
export class ProjectsRotundaComponent implements OnInit {
  public projectsList: Project[] = [];
  constructor(private globalData: DataService) { }

  ngOnInit(): void {
    let allProjects = this.globalData.getProjectList();
    this.projectsList = allProjects.filter((project) => project.importantRank === 3 || project.importantRank === 2)
  }


}

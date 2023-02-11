import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projectName: string = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get("projectName") as string
  }

}

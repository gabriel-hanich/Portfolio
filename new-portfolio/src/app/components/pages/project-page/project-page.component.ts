import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  public projectSlug: string|null = ""
  public title: string = "Compute Power"

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectSlug = this.route.snapshot.paramMap.get("projectSlug") as string
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionsService } from 'src/app/services/connections/connections.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public readyState: "loading" | "success" | "fail" = "loading";
  public projectId: string = "";

  public projectName: string = "";
  public techUsed: string[] = [];
  public content: string = "";

  constructor(private route: ActivatedRoute, private connections: ConnectionsService) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get("projectName") as string
    this.connections.getProjectData(this.projectId).then((res)=>{
      console.log(res);
      this.projectName = res["projectName"];
      this.techUsed = res["projectTech"].split(",");
      this.content = res["content"]["rendered"];
      this.readyState = "success";
    }).catch((err)=> this.readyState = "fail")
  }

}

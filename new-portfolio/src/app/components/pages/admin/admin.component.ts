import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from 'src/app/services/connections/connections.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public signInStage: "prompt" | "loading" | "success" | "error" = "prompt";
  public errorText: string = "";
  public siteUrl: string = "";

  constructor(private connections: ConnectionsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("adminLogin")){
      this.signInStage = "loading";
      let adminCredentials: any = JSON.parse(localStorage.getItem("adminLogin") as string);
      this.verifyAdmin(adminCredentials["userName"], adminCredentials["password"])
    }
    if(localStorage.getItem("adminSiteUrl")){
      this.siteUrl = localStorage.getItem("adminSiteUrl") as string
    }
  }

  verifyAdmin(userName: string, password: string, event?: SubmitEvent): void{
    if(event){
      event.preventDefault();
    }
    this.connections.verifyAdmin(userName, password).then((res)=>{
      if(res){
        this.signInStage = "success";
        localStorage.setItem("adminLogin", JSON.stringify({"userName": userName, "password": password}));
      }else{
        this.signInStage = "error";
        this.errorText = res;
      }
    });
    this.signInStage = "loading";
  }

  getWordPressData(siteUrl: string, event: SubmitEvent): void{
    event.preventDefault();
    if(siteUrl[siteUrl.length - 1] === "/"){
      siteUrl = siteUrl.substring(0, siteUrl.length - 1)
    }
    localStorage.setItem("adminSiteUrl", siteUrl);
    this.signInStage = "loading";

    let getData = async () => {
      let projectData = await this.connections.getProjects(siteUrl);
      let experienceData = await this.connections.getExperience(siteUrl);

      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({"projects": projectData, "experience": experienceData}));
      var dlAnchorElem = document.getElementById('downloadAnchorElem') as HTMLElement;
      dlAnchorElem.setAttribute("href",     dataStr     );
      dlAnchorElem.setAttribute("download", "siteData.json");
      dlAnchorElem.click();
      this.signInStage = "success";
    };

    getData();
  }

}

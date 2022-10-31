import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public currentBuild: number = -1;
  public showBarContent: boolean = false;
  public showProjects: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Toggle the build text
    let buildInterval = setInterval(()=>{
      this.currentBuild += 1;

      if(this.currentBuild == 3){
        clearInterval(buildInterval)
      }
    }, 2000)
    
    // Change the bars from bars to the bar content
    setTimeout(()=>{
      // Combine all the bars into a single bar
      this.showBarContent = true;
      var bars = document.getElementsByClassName("bars-bar");
      for(var i=0; i<bars.length; i++){
        bars[i].classList.add("hidden");
      }
    }, 8500)

    // Show projects container
    setTimeout(()=>{
        document.getElementById("projectContainer")?.classList.remove("hidden");
    }, 10000)


    document.addEventListener("scroll", (e: Event)=>{
      if(window.scrollY > 799 && window.scrollY < 4889){
        this.showProjects = true
      }else{
        this.showProjects = false;  
      }
      console.log(window.scrollY);
    });
  }

}

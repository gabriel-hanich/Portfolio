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
  public showInfo: boolean = false;
  public showExperience: boolean = false;
  public showContact: boolean = false; 
  
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
    }, 5500)

    // Show projects container
    setTimeout(()=>{
      this.showInfo = true;
        document.addEventListener("scroll", ()=>{
          if(window.scrollY / window.innerHeight > 0.65){
            this.showProjects = true
          }if (window.scrollY / window.innerHeight > 1.2){
            this.showExperience = true
          } if(window.scrollY / window.innerHeight > 1.8){
            this.showContact = true;
          }
        })
    }, 7500)
  }

}

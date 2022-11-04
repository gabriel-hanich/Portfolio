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
  public showFiller: boolean = false;
  public showExperience: boolean = false;
  
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
      this.showFiller = true;
        document.addEventListener("scroll", ()=>{
          console.log(window.scrollY / window.innerHeight)
          if(window.scrollY / window.innerHeight > 0.65){
            this.showProjects = true
          }if (window.scrollY / window.innerHeight > 0.99){
            this.showExperience = true
          }
        })
    }, 10000)
  }

}

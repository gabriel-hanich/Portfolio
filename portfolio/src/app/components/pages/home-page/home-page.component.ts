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
        window.addEventListener(("scroll"), ()=>{
          var revealList = document.querySelectorAll(".component-container");
          var windowHeight = window.innerHeight;
          revealList.forEach((elem: Element)=>{
            var elementTop = elem.getBoundingClientRect().top;
            var marginTop = 300;
            if(elementTop < windowHeight - marginTop){
              elem.children.item(0)?.classList.remove("hidden");
            }
          });
        })
    }, 7500)
  }

}

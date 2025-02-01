import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss']
})
export class EnvelopeComponent implements OnInit {
  // public title:string = @Input("letterTitle");
  // public paragraph:string = @Input("paragraph");
  
  @Input() title: string = "";
  @Input() paragraph: string = "";
  @Input() link:string = "";
  @Input() dotColor:string = "";
  @Input() startOpened: boolean = false;
  @Input() openOnScroll: boolean = true;
  @Input() openDelay: number = 1500;

  public animateOpen: boolean = false;
  public observer: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
    if(this.openOnScroll){
      setTimeout(()=>{this.registerScrollEffect()}, 1000)
    }
  }

  public registerScrollEffect(): void{
    let container: HTMLElement|null = document.getElementById(this.title);
    if(container == null){
      return
    }
    this.observer = new IntersectionObserver((elements)=>{
      if(elements[0].isIntersecting){
        setTimeout(()=>{
          this.animateOpen = true;
        }, this.openDelay)
      }
    });

    this.observer.observe(container)
    
  }

  public openEnvelope(event: Event): void{
    console.log(event)
  }

}

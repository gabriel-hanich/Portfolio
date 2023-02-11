import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.scss']
})
export class WelcomeTextComponent implements OnInit {
  public roleText: string = "";
  private roles = ["Developer", "Frontend", "Backend", "Data Analysis"]

  constructor() { }

  ngOnInit(): void {
    let i = 0;
    this.roleText = this.roles[i]
    const updateRole = setInterval(()=>{
      let aim = this.roles[i];
      this.roleText = this.roles[i]
      


      i++;
      if(i >= this.roles.length){
        clearInterval(updateRole)
      }
    }, 1500)
  }


}

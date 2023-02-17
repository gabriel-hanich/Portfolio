import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  public loginState: "login" | "load" | "fail" | "success" | "wait" = "login"
  public errorText: string = ""

  constructor() { }

  ngOnInit(): void {
  
  }

  onFormSubmit(event: SubmitEvent, userName: string, pin: string): void{
    event.preventDefault();
    this.loginState = "load";
  }

}

import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from 'src/app/services/connections/connections.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  public loginState: "login" | "load" | "fail" | "success" | "wait" = "login"
  public errorText: string = ""
  public content: any = {};

  constructor(private connections: ConnectionsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("loginDetails")){
      let details = JSON.parse(localStorage.getItem("loginDetails") as string);
      this.onFormSubmit(details["userName"], details["pin"])
    }
  }
  
  onFormSubmit(userName: string, pin: string, event?: SubmitEvent): void{
    if(event){
      event.preventDefault();
    }
    this.loginState = "load";
    this.connections.verifyLogin(userName, pin).then((res)=>{
      if(res.success){
        this.loginState = "success";
        this.content = res.content;
        console.log(this.content);
        localStorage.setItem("loginDetails", JSON.stringify({"userName": userName, "pin": pin}));
      }else{
        this.loginState = "fail";
        this.errorText = res.msg
      }
    });
  }

}

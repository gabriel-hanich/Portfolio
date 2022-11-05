import { Component, OnInit } from '@angular/core';
import { PrivDataService } from 'src/app/services/connections/priv-data.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.scss']
})
export class PrivatePageComponent implements OnInit {
  public showLoginPage: boolean = true;
  public loginSuccessful: boolean = false;
  public code: String = "";

  constructor(private connections: PrivDataService) { }

  ngOnInit(): void {
    var priorCode: string | null = localStorage.getItem("code");
    if(priorCode){
      this.showLoginPage = false;
      this.code = priorCode;
      this.connections.checkCode().subscribe((res: boolean)=>{
        if(res){
          this.loginSuccessful = true
        }
      });


    }else{
      setTimeout(()=>{
        var inputFields: NodeListOf<any> = document.querySelectorAll(".input-field");
        var inputForm: HTMLFormElement=(document.getElementById("input-form") as HTMLFormElement);
        inputFields[0].focus();
        inputFields.forEach((field: any, index: number)=>{
          field.dataset.id = index;
  
          field.addEventListener('keyup', ()=>{
            if(field.value.length == 1){
              if(inputFields[inputFields.length - 1].value.length == 1){
                var code: string = ""
                inputFields.forEach((field)=>{
                  code += field.value
                })
                inputForm.submit();
                localStorage.setItem("code", code)
              }
              inputFields[parseInt(field.dataset.id) + 1].focus();
            }
          });
        });
      }, 150)
    }
  }

}

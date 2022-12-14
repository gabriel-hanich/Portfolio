import { Component, OnInit } from '@angular/core';
import { PrivDataService } from 'src/app/services/connections/priv-data.service';
import { packet } from 'src/app/types';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.scss']
})
export class PrivatePageComponent implements OnInit {
  public showLoginPage: boolean = true;
  public showError: boolean = false;
  public loginSuccessful: boolean = false;
  public code: String = "";
  public pageData: packet;

  constructor(private connections: PrivDataService) { }

  ngOnInit(): void {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    var priorCode: string | null = localStorage.getItem("code");
    console.log(priorCode)
    if(priorCode){
      this.showLoginPage = false;
      this.code = priorCode;
      this.connections.getData(this.code).subscribe((res: boolean | packet)=>{
        console.log(res);
        if(!res){
          this.showError = true
          setTimeout(()=>{
            this.logout();
          }, 3500)
        }else{
          this.loginSuccessful = true;
          this.pageData = (res as packet)
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

  toggleSection(sectionElement: HTMLElement, caretElement: HTMLElement){
    sectionElement.classList.toggle("expanded");
    caretElement.classList.toggle("rotated-caret");
  }

  logout():void{
    localStorage.clear();
    setTimeout(()=>{
      location.reload();
    }, 150)
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { packet } from 'src/app/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivDataService {

  constructor(private httpClient: HttpClient) { }

  getData(pin: String): Observable<packet | boolean>{
    return (this.httpClient.post(environment.pinURL,
    {"pin": pin},
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }) as any as Observable<packet>)
  }
}

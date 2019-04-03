import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url='http://api.openweathermap.org/data/2.5/weather?q=';
   code='&APPID=c170200787e6b262ab1924a2120b3ac0';
     
  constructor(public http : HttpClient) {}
    getData(city) {
   return this.http.get<any>(`${this.url}${city}${this.code}`);
   }

  
}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
 
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 datas="";
 temps="";
 wetherData: any;
 city="tunis";
  constructor(public serv :ServicesService) { }

  ngOnInit() {
      this.serv.getData(this.city).subscribe(res=> {
     this.datas = res;
     this.temps= res.weather;
     
       
    });
   
  }
 
  test(){
    console.log(this.city)
this.serv.getData(this.city).subscribe(res=>{
      this.wetherData= res;
      console.log(this.wetherData);
    });
  }
 

}

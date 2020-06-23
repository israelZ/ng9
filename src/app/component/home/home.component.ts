import { Component, OnInit } from '@angular/core';
import {Observable,of} from 'rxjs'
import {ServiceService} from '../../service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  observDarkLight:boolean=true;
  listUsers:Observable<any>
  userShow
  language='en'
  

  constructor(public service:ServiceService) { 
    
    this.listUsers=this.service.getUsersEn()
  }

  ngOnInit(): void {}


  showUser(user)
  {
    if(user !=null)
    {
      this.userShow= user 
    }
    else
    console.log("user is null");
  }
  

  openMoovit(){

    try {
      window.open('https://moovit.com/?to='+this.userShow['adress_moov']+'&tll='+this.userShow['la']+'_'+this.userShow['lo']+'&metroId=121&lang=he')
      
    } catch (error) 
    {
      console.log(error);  
    }

  }

  openWaze()
  {
    try {
      window.open('https://www.waze.com/ul?ll='+this.userShow['la']+'%2C'+this.userShow['lo']+'&navigate=yes&zoom=17')
    } catch (error) 
    {
      console.log(error);  
    }
  }

  darkLight()
  {
    this.observDarkLight=!this.observDarkLight
  }

  changeLanguage(lan)
  {
    if (lan==null)
    {
      console.log('The language is undefined');
      return
    }
    
    this.language=lan

    this.userShow=null
    switch (lan) 
    {
      case 'en':
      this.listUsers= this.service.getUsersEn()
      break;
      case 'he':
      this.listUsers= this.service.getUsersHe()
        break;
        console.log("The language is undefined");
      default:
        break;
    }

  }
  

}

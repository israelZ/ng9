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
    this.userShow= user 
  }
  showUserSm(user)
  {
    this.userShow=user
    
    window.scrollTo(0,0)
  }

  openMoovit(){

    window.open('https://moovit.com/?to='+this.userShow['adress_moov']+'&tll='+this.userShow['la']+'_'+this.userShow['lo']+'&metroId=121&lang=he')
  }

  openWaze(){
    window.open('https://www.waze.com/ul?ll='+this.userShow['la']+'%2C'+this.userShow['lo']+'&navigate=yes&zoom=17')
  }

  darkLight()
  {
    this.observDarkLight=!this.observDarkLight
  }

  changeLanguage(lan)
  {
    
    
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
    
      default:
        break;
    }

  }
  

}

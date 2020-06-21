import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {ServiceService} from '../../service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listUsers:Observable<any>
  userShow
  

  constructor(public service:ServiceService) { 
    
    this.listUsers=this.service.getUsers()
  }

  ngOnInit(): void {



  }


  showUser(user)
  {
    this.userShow=user 
  }
  showUserSm(user)
  {
    this.userShow=user 
    window.scrollTo(0,0);
  }

  openMoovit(){

    window.open('https://moovit.com/?to='+this.userShow['adress_moov']+'&tll='+this.userShow['la']+'_'+this.userShow['lo']+'&metroId=121&lang=he')
  }

  openWaze(){
    window.open('https://www.waze.com/ul?ll='+this.userShow['la']+'%2C'+this.userShow['lo']+'&navigate=yes&zoom=17')
  }

  

}

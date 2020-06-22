import { Injectable } from '@angular/core';
import {observable,of, Observable} from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})

export class ServiceService {

  constructor(public http:HttpClient) { }


  getUsersEn()
  {
    return this.http.get('api/users_en')
  }
  getUsersHe()
  {
    return this.http.get('api/users_he')
  }

  }



import { Injectable } from '@angular/core';
import {observable,of, Observable} from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})

export class ServiceService {

  constructor(public http:HttpClient) { }


  getUsers()
  {
    return this.http.get('api/users')
  }

  }



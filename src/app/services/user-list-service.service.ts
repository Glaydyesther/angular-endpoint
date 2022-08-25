import { Injectable } from '@angular/core';
import { catchError, identity, Observable, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserListServiceService {

 private API_USERS = "https://jsonplaceholder.typicode.com/users";
 
  constructor(public http: HttpClient) { }

  public getUserList(): Observable<any>{
    return this.http.get(this.API_USERS);
  }
   
  public getUserById(id: number):Observable<any>{
  const url = `${this.API_USERS}/${id}`;
    return this.http.get(url); 
    
  }
}

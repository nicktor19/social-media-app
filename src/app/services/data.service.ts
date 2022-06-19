import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getPostById(id: number): Observable<any>{
    return this.http.get('http://localhost:8080/api/Posts/'+ id)
  }

  getAllPublicPost():Observable<any>{
    return this.http.get('http://localhost:8080/api/Posts');
  }

  getUserById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/Users/'+ id)
  }

  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:8080/api/Users/')
  }
}

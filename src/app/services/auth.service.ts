import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../models/friends';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //User
  register(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/Users', data)
  }

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/Users/user', data)
  }

  updateUser(data: any): Observable<any> {
    return this.http.put('http://localhost:8080/api/Users/update', data)
  }

  //user-profile
  getUserById(userId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/Users/'+ userId)
  }

  //Post
  addPost(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/Posts', data)
  }

  //friends
  addFriend(newFriend: any): Observable<any>{
    return this.http.post('http://localhost:8080/api/friends/add', newFriend)
  }

  checkFriendRecord(checkFriend: any): Observable<any>{
    return this.http.put<any>('http://localhost:8080/api/friends/getrecord', checkFriend)
  }  
  
  pendingFriends(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/friends/searchfriendlist', data)
  }

  updateFriends(data: any): Observable<any>{
    return this.http.put<any>('http://localhost:8080/api/friends/update', data)
  }

}
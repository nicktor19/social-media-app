import { inject, Injectable, resolveForwardRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { User } from '../models/user';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  checkSession: boolean = false;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  /**
   * if user is logged in this will redirect the user to dashboard (remind Nick to remove it from profile thank you.)
   */
  sessionActive() {
    this.checkSession = this.checkLoggedInActive();
    if (this.checkSession === true) {
      this.loggedinDirector();
    }
  }

  /**
   * if user is logged out this will redirect the user to login.
   */
  sessionDeactive() {
    this.checkSession = this.checkLoggedInActive();
    if (this.checkSession === false) {
      this.loggedOutDirector();
    }
  }

  /**
   * returns a boolean to see if you're logged in.
   */
  checkLoggedInActive(): boolean {
    return this.cookieService.check("loggedin");
  }

  /**
   * if user logged in redirect user to dashboard.
   */
  loggedinDirector() {
    if (this.checkLoggedInActive() === true)
      this.router.navigateByUrl("/dashboard");
  }

  /**
   * if user logged out redirect to homepage.
   */
  loggedOutDirector() {
    if (this.checkLoggedInActive() === false)
      this.router.navigate(["/home"]);
  }

  /**
   * if user logged out redirect to homepage.
   */
  checkCookieActive(cookieName: string): boolean {
    return this.cookieService.check(cookieName);
  }

  /**
   * used to create a new cookie. Name the cookie whatever you want and the data you want it to store.
   * @param cookieName
   * @param data 
   */
  createSession(cookieName: string, data: any) {
    if (cookieName === "userAccount"){
      this.cookieService.set(cookieName, JSON.stringify(data));
      this.cookieService.set("loggedin", "true");
    }else {
      this.cookieService.set(cookieName, JSON.stringify(data));
    }
    this.reloadCurrentPage();
    //this.router.navigate(['/dashboard']);
    this.router.navigateByUrl("/dashboard"); //redirects user to profile page. change to dashboard later
  }

  updateSession(cookieName: string, data: any){
    if (cookieName === "userAccount"){
      this.cookieService.set(cookieName, JSON.stringify(data));
    }
    this.router.navigate(['/profile']);
  }
  /**
   * sets any empty stings to null
   */
  userAccountNormalizer(data: User): User {
    //console.log(data);
    if (data.firstName === '' || data.firstName === null)
      data.firstName = undefined;
    if(data.lastName === '' || data.lastName === null)
      data.lastName = undefined;
    if(data.email === '' || data.email === null)
      data.email = undefined;
    if(data.password === '' || data.password === null)
      data.password = undefined;
    if(data.description === '' || data.description === null)
     data.description = undefined;
    if(data.occupation === '' || data.occupation === null)
     data.occupation = undefined;
    if(data.city === '' || data.city === null)
     data.city = undefined;
    if(data.nationality === '' || data.nationality === null)
      data.nationality = undefined;
    if(data.hobbies === '' || data.hobbies === null)
      data.hobbies = undefined;
    if(data.twitter === '' || data.twitter === null)
      data.twitter = undefined;
    if(data.linkedin === '' || data.linkedin === null)
      data.linkedin = undefined;
    if(data.facebook === '' || data.facebook === null)
      data.facebook = undefined;
    if(data.imgURL === '' || data.imgURL === null)
     data.imgURL = undefined;
    if(data.id === null)
      data.id = undefined;
    return data;
  }

  /**
   * if you check userAccount store the cookie into a User
   * @param cookieName
   * @returns 
   */
  getSession(cookieName: string): any {
    let cookie: any;
    if (cookieName === 'userAccount'){
      cookie = this.userAccountNormalizer(JSON.parse(this.cookieService.get(cookieName)));
      return cookie
    } else {
      cookie = JSON.parse(this.cookieService.get(cookieName))
      return cookie;
    }
  }

  /**
   * used to logout the user which redirects them home.
   */
  logout() {
    this.cookieService.deleteAll();
    //this.router.navigate([""]);
    //this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload();
   }
}


import { Injectable, resolveForwardRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { User } from '../models/user';

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
      this.router.navigateByUrl("");
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
    (data.firstName === '' || data.firstName === null)? data.firstName = undefined : "";
    (data.lastName === '' || data.lastName === null)? data.lastName = undefined : "";
    (data.email === '' || data.email === null)? data.email = undefined : "";
    (data.password === '' || data.password === null)? data.password = undefined : "";
    (data.description === '' || data.description === null)? data.description = undefined : "";
    (data.occupation === '' || data.occupation === null)? data.occupation = undefined : "";
    (data.city === '' || data.city === null)? data.city = undefined : "";
    (data.nationality === '' || data.nationality === null)? data.nationality = undefined : "";
    (data.hobbies === '' || data.hobbies === null)? data.hobbies = undefined : "";
    (data.twitter === '' || data.twitter === null)? data.twitter = undefined : "";
    (data.linkedin === '' || data.linkedin === null)? data.linkedin = undefined : "";
    (data.facebook === '' || data.facebook === null)? data.facebook = undefined : "";
    (data.imgURL === '' || data.imgURL === null)? data.imgURL = undefined : "";
    (data.id === null)? data.id = undefined : "";
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
    this.router.navigateByUrl("");
    this.reloadCurrentPage();
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}


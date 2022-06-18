import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

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
    this.cookieService.set(cookieName, JSON.stringify(data));
    this.cookieService.set("loggedin", "true");
    this.reloadCurrentPage();
    this.router.navigateByUrl('/dashboard');
    //this.router.navigateByUrl("/dashboard"); //redirects user to profile page. change to dashboard later
  }

  getSession(cookieName: string): any {
    return JSON.parse(this.cookieService.get(cookieName));
  }

  /**
   * used to logout the user which redirects them home.
   */
  logout() {
    this.cookieService.deleteAll();
    this.reloadCurrentPage()
    this.router.navigateByUrl("");
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}


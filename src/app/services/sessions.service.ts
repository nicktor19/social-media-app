import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(
    private cookieService: CookieService
    ) { }

  createSession(cookieName: string, data: any) {
    this.cookieService.set(cookieName, JSON.stringify(data));
  }

  getSession(cookieName: string): any {
    console.log(JSON.parse(this.cookieService.get(cookieName)))
    return JSON.parse(this.cookieService.get(cookieName));

  }

  /**
   * 
   * @param cookieName used to logout
   */
  logout(){
      this.cookieService.deleteAll();
  }
}


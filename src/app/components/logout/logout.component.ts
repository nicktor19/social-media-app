import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private sessionService: SessionsService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sessionService.logout()
    if (!localStorage.getItem('userAccount')) { 
      localStorage.setItem('userAccount', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('userAccount') 
    }
    this.cookieService.deleteAll();
  }
}

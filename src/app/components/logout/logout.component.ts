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
    this.cookieService.deleteAll();
  }

}

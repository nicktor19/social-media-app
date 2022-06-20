import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  user: any;
  logger: boolean = false;
  call = this.checkLogger();

  constructor(
    private sessionService: SessionsService,
    ) { }

  ngOnInit(): void { 
    this.checkLogger() 
  }

  onClickLogout() {
    this.sessionService.logout();   
  }

  checkLogger() {
    if (this.sessionService.checkLoggedInActive())
    {
      this.user = this.sessionService.getSession("userAccount");
      this.logger = true;
    }else
      this.logger = false
  }
}

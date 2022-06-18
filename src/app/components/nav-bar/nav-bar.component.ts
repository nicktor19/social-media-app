import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  logger: boolean = false;
  call = this.test();

  constructor(
    private sessionService: SessionsService
    ) { }

  ngOnInit(): void { 
    this.test() 
  }

  onClickLogout() {
    this.sessionService.logout();
  }

  test() {
    if (this.sessionService.checkLoggedInActive())
      this.logger = true;
    else
      this.logger = false
  }
}

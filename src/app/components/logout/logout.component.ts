import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private sessionService: SessionsService
  ) { }

  ngOnInit(): void {
    this.sessionService.logout()
    if (!localStorage.getItem('userAccount')) { 
      localStorage.setItem('userAccount', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('userAccount') 
    }
  }
}

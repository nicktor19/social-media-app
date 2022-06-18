import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../services/sessions.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private sessionService: SessionsService) { }

  ngOnInit(): void {
    this.sessionService.loggedOutDirector(); //if you aren't logged in
  }

}

import { Component, OnInit } from '@angular/core';
import { SessionsService } from "src/app/services/sessions.service"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  checkSession: boolean = false;

  constructor(
    private cookieService: SessionsService
  ) { }

  ngOnInit(): void {
    this.cookieService.sessionActive(); //checking if user is logged in
  }

}

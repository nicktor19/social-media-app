import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SessionsService } from './../../services/sessions.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = User;
  url = "document.location.href=";
  constructor(
    private cookieService: SessionsService,
  ) { }

  ngOnInit(): void {
    this.cookieService.loggedOutDirector(); //checking if user is logged in
    this.user = this.cookieService.getSession('userAccount');
  }

}

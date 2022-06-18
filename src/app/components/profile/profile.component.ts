import { Component, OnInit } from '@angular/core';
import { SessionsService } from './../../services/sessions.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileImg: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg"
  firstName: string = "Naymar"
  lastName: string = "Jr"
  description: string = "Naymar jr"
  occupation: string = "Professional Footballer"
  city: string = "Paris"
  nationality: string = "French"
  hobbies: string = "Videogames Reading Sports"
  twitter: string = "https://twitter.com/neymarvx_"
  linkedin:string = ""
  facebook: string = ""

  constructor(
    private cookieService: SessionsService
  ) { }

  ngOnInit(): void {
    this.cookieService.loggedOutDirector(); //checking if user is logged in
  }

}

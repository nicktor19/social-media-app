import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
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
  userModel:User = new User();

  constructor(
    private cookieService: SessionsService
  ) { }

  ngOnInit(): void {
    this.cookieService.loggedOutDirector(); //checking if user is logged in
    let user = this.cookieService.getSession('userAccount')
    this.userModel = new User(user.firstName, user.lastName, user.email, user.password, user.description, user.occupation, user.city, user.nationality, user.hobbies, user.twitter,user.linkedin,user.facebook,user.imgURL,user.id)
    this.profileImg = this.userModel.imgURL ?? '';
    this.firstName = this.userModel.firstName ?? '';
    this.lastName = this.userModel.lastName ?? '';
    this.description = this.userModel.description ?? '';
    this.occupation = this.userModel.occupation ?? '';
    this.city = this.userModel.city ?? '';
    this.nationality = this.userModel.nationality ?? '';
    this.hobbies = this.userModel.hobbies ?? '';
    this.twitter = this.userModel.twitter ?? '';
    this.linkedin = this.userModel.linkedin ?? '';
    this.facebook = this.userModel.facebook ?? '';
  }

}

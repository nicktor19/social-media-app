import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { SessionsService } from './../../services/sessions.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  hide = true;
  userModel = new User();
  imageSrc: string = ""
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""
  description: string = ""
  occupation: string = ""
  city: string = ""
  nationality: string = ""
  hobbies: string = ""
  twitter: string = ""
  linkedin: string = ""
  facebook: string = ""
  profilePic: string = ""

  editFirstName = false;
  editLastName = false;
  editEmail = false;
  editPassword = false;
  editOccupation = false;
  editDescription = false;
  editCity = false;
  editNationality = false;
  editHobbies = false;
  editTwitter = false;
  editLinkedIn = false;
  editFacebook = false;
  editProfilePic = false;
  srcResult: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  constructor(
    private authService: AuthService,
    private sessionService: SessionsService,
    private http: HttpClient
    ) {
    this.srcResult = '';
  }

  ngOnInit(): void {
    this.sessionService.loggedOutDirector()//check if logged in

    this.userModel = new User("Naymar", "Jr", "NJr@gmail.com", "123", "Naymar Jr", "Professional Footballer", "Paris", "French", "Videogames Reading Sports", "https://twitter.com/neymarvx_", "", "","https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg", 123)
    this.imageSrc = this.userModel.profilePic ?? '';
    this.firstName = this.userModel.firstName ?? '';
    this.lastName = this.userModel.lastName ?? '';
    this.email = this.userModel.email ?? '';
    this.password = this.userModel.password ?? '';
    this.description = this.userModel.description ?? '';
    this.occupation = this.userModel.occupation ?? '';
    this.city = this.userModel.city ?? '';
    this.nationality = this.userModel.nationality ?? '';
    this.hobbies = this.userModel.hobbies ?? '';
    this.twitter = this.userModel.twitter ?? '';
    this.linkedin = this.userModel.linkedin ?? '';
    this.facebook = this.userModel.facebook ?? '';
    this.profilePic = this.userModel.profilePic ?? '';
  }

  edit(element: any) {
    switch (element.name) {
      case "firstName":
        this.editFirstName = true;
        break;
      case "lastName":
        this.editLastName = true;
        break;
      case "email":
        this.editEmail = true;
        break;
      case "password":
        this.editPassword = true;
        this.hide = false;
        break;
      case "description":
        this.editDescription = true;
        break;
      case "occupation":
        this.editOccupation = true;
        break;
      case "city":
        this.editCity = true;
        break;
      case "nationality":
        this.editNationality = true;
        break;
      case "hobbies":
        this.editHobbies = true;
        break;
      case "twitter":
        this.editTwitter = true;
        break;
      case "linkedin":
        this.editLinkedIn = true;
        break;
      case "facebook":
        this.editFacebook = true;
        break;
      case "profilePic":
        this.editProfilePic = true;
        break;
    }
    element.disabled = false;
  }

  cancelEdit(element: any) {
    element.disabled = true;
    switch (element.name) {
      case "firstName":
        this.userModel.firstName = this.firstName
        this.editFirstName = false;
        break;
      case "lastName":
        this.userModel.lastName = this.lastName
        this.editLastName = false;
        break;
      case "email":
        this.userModel.email = this.email
        this.editEmail = false;
        break;
      case "password":
        this.userModel.password = this.password
        this.editPassword = false;
        this.hide = true;
        break;
      case "occupation":
        this.userModel.occupation = this.occupation
        this.editOccupation = false;
        break;
      case "description":
        this.userModel.description = this.description
        this.editDescription = false;
        break;
      case "city":
        this.userModel.city = this.city
        this.editCity = false;
        break;
      case "nationality":
        this.userModel.nationality = this.nationality
        this.editNationality = false;
        break;
      case "hobbies":
        this.userModel.hobbies = this.hobbies
        this.editHobbies = false;
        break;
      case "twitter":
        this.userModel.twitter = this.twitter
        this.editTwitter = false;
        break;
      case "linkedin":
        this.userModel.linkedin = this.linkedin
        this.editLinkedIn = false;
        break;
      case "facebook":
        this.userModel.facebook = this.facebook
        this.editFacebook = false;
        break;
      case "profilePic":
        this.userModel.profilePic = this.profilePic
        this.editProfilePic = false;
        break;
    }
  }

  onSubmitHandler(data: any) {
    console.log(data);
    this.userModel = data
    this.authService.login(this.userModel).subscribe(response => {
      console.log(response);
    })
  }
}

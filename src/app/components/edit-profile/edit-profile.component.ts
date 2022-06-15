import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  // change hardcoding remove when done
  imageSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg';
  firstName: string = "Jeffrey";
  lastName: string = "Saelee";
  email: string = "JS123@gmail.com"
  password: string = "123"
  description: string = "Naymar jr"
  occupation: string = "Professional Footballer"
  city: string = "Paris"
  nationality: string = "French"
  hobbies: string = "Videogames Reading Sports"
  twitter: string = "https://twitter.com/neymarvx_"
  linkedin: string = ""
  facebook: string = ""

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

  constructor() { }

  ngOnInit(): void {
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
    }
    element.disabled = false;
    console.log(element.value);
  }

  cancelEdit(element: any) {
    element.disabled = true;
    switch (element.name) {
      case "firstName":
        this.editFirstName = false;
        break;
      case "lastName":
        this.editLastName = false;
        break;
      case "email":
        this.editEmail = false;
        break;
      case "password":
        this.editPassword = false;
        break;
      case "occupation":
        this.editOccupation = false;
        break;
      case "description":
        this.editDescription = false;
        break;
      case "city":
        this.editCity = false;
        break;
      case "nationality":
        this.editNationality = false;
        break;
      case "hobbies":
        this.editHobbies = false;
        break;
      case "twitter":
        this.editTwitter = false;
        break;
      case "linkedin":
        this.editLinkedIn = false;
        break;
      case "facebook":
        this.editFacebook = false;
        break;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  // change hardcoding remove when done
  imageSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg';
  firstName: string= "Jeffrey";
  lastName: string= "Saelee";
  email: string="JS123@gmail.com"
  password: string="123"

  editFirstName = false;

  constructor() { }

  ngOnInit(): void {
  }

  editFirstname(element:any) {
    this.editFirstName = true;
    element.disabled = false;
    console.log(element.value);
  }

  cancelEditFirstName(element:any) {
    element.disabled = true;
    this.editFirstName = !this.editFirstName;
    if ("Jeffrey" != element.value){
      element.value = "Jeffrey"
    }
  }

}

import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePass = true;
  userModel = new User();
  display = false;
  registerStatus: boolean = false;

  constructor(
    private authService: AuthService,
    private cookieService: SessionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmitHandler(){
    this.userModel.imgURL = "https://i1.lensdump.com/i/t7Evea.png";
     if (this.userModel.firstName !== undefined
      || this.userModel.lastName !== undefined 
      || this.userModel.email !== undefined 
      || this.userModel.password !== undefined){
        this.authService.register(this.userModel).subscribe(response => {
          this.registerStatus = response;
          if (response){
            this.router.navigateByUrl("");
          }
          else {
              this.display=true;
            }
        });
      }
  }
}
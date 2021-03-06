import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/services/data.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  feedItems: any[] = [];

  constructor(private dataService: DataService, private sessionService: SessionsService) {

    this.sessionService.loggedOutDirector();

   }

  ngOnInit(): void {

    let user = this.sessionService.getSession("userAccount")
    
    this.dataService.getPostById(user.id).subscribe( response =>{
      this.feedItems = response.map( (item:any) =>{
       return {
          firstName: user.firstName,
          lastName: user.lastName,
          imgURL: item.imgURL,
          message: item.message,
          userId: user.id
        }
      }).reverse()
    });
   }

}

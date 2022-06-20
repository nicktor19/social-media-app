import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { SessionsService } from 'src/app/services/sessions.service';
import { AuthService } from 'src/app/services/auth.service';
import {ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  feedItems: [] = []
  user: any = User;
  userId: any;

  constructor(
    private sessionService: SessionsService,
    private aurthSerivce: AuthService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
    ) {
      this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
     }

  ngOnInit(): void {
    this.sessionService.sessionDeactive();

    this.aurthSerivce.getUserById(this.userId).subscribe(data => {
      this.user = data;
    })
    this.dataService.getPostById(this.userId).subscribe(response => {
      this.feedItems = response.map((item: any) => {
        return {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          imgURL: item.imgURL,
          message: item.message
        }
      }).reverse()
    });

  }

}

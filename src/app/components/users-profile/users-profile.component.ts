import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { SessionsService } from 'src/app/services/sessions.service';
import { AuthService } from 'src/app/services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {

  user: any = User;
  userId: any;

  constructor(
    private sessionService: SessionsService,
    private aurthSerivce: AuthService,
    private activatedRoute: ActivatedRoute
    ) {
      this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
     }

  ngOnInit(): void {
    this.sessionService.sessionDeactive();

    this.aurthSerivce.getUserById(this.userId).subscribe(data => {
      this.user = data;
      //console.log(data);
    })
  }

}

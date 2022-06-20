import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { SessionsService } from 'src/app/services/sessions.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  feedItems: any[] = []
  user: any = User;
  userId: any;
  filterLoaded!: Promise<boolean>;

  constructor(
    private sessionService: SessionsService,
    private aurthSerivce: AuthService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.sessionService.loggedOutDirector();
    this.aurthSerivce.getUserById(this.userId).subscribe({
      next: data => {
        this.user = data
      },
      complete: () => {
        this.dataService.getPostById(this.userId).subscribe({
          next: (response) => {
            response.forEach((item: any) => {
              this.feedItems.push({
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                imgURL: item.imgURL,
                message: item.message,
                userId: this.user.id
              })
            })
          },
          complete: () => {
            this.filterLoaded = Promise.resolve(true);
          }
        });
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { Friend } from '../../models/friends'
import { User } from '../../models/user'

@Component({
  selector: 'app-friends-requests',
  templateUrl: './friends-requests.component.html',
  styleUrls: ['./friends-requests.component.css']
})
export class FriendsRequestsComponent implements OnInit {

  currentUser = new User();
  storePendingFriends: any[] = [];
  populatedFriends : User[];

  constructor(
    private sessionService: SessionsService,
    private authService: AuthService
  ) { 


   }

  ngOnInit(): void {
        //get all friendsList pending
        this.currentUser = this.sessionService.getSession("userAccount");
        this.authService.pendingFriends(this.currentUser.id).subscribe(data => {
          this.storePendingFriends = data;
          console.log(this.storePendingFriends);
        });
  }

  onClickAcceptFriend() {
    
    
  }
  onClickRejectFriend() {
    
  }

}

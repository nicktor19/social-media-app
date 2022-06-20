import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friends';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  currentUser = this.sessionService.getSession("userAccount");
  getFriend = new Friend();
  storeApprovedFriends: any[] = [];
  populatedApprovedFriends: any[] = []; // user that were aprpoved
  showFiller = false;

  constructor(
    private sessionService: SessionsService,
    private dataService: DataService,
    private authService: AuthService

  ) {
    this.getFriend.requester = this.currentUser.id;
    console.log(this.getFriend.requester);
    this.getFriend.status = "Approved";
  }

  ngOnInit(): void {
    this.authService.searchFriends(this.getFriend).subscribe(data => {
      this.storeApprovedFriends = data;
      //get all friends users
      this.storeApprovedFriends.forEach(data => {
        //getting the other friend.
        if (this.currentUser.id != data.requester) {
          this.dataService.getUserById(data.requester).subscribe(data => {
            this.populatedApprovedFriends.push(data);
          });
        } else if (this.currentUser.id != data.decider) {
          this.dataService.getUserById(data.decider).subscribe(data => {
            this.populatedApprovedFriends.push(data);
          });
        }
      });
    });
  }
}

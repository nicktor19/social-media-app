import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from '../../services/data.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { User } from '../../models/user'
import { Friend } from 'src/app/models/friends';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-friends-requests',
  templateUrl: './friends-requests.component.html',
  styleUrls: ['./friends-requests.component.css']
})
export class FriendsRequestsComponent implements OnInit {

  currentUser = this.sessionService.getSession("userAccount");
  getFriend = new Friend();
  storePendingFriends: any[] = [];
  populatedFriendsRequester: any[] = []; // user can't approve
  populatedFriendsDecider: any[] = []; // user can approve these

  constructor(
    private sessionService: SessionsService,
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.getFriend.requester = this.currentUser.id;
    this.getFriend.status = "Pending";
  }

  ngOnInit(): void {
    //get all friendsList pending
    this.authService.searchFriends(this.getFriend).subscribe(data => {
      this.storePendingFriends = data;
      //get all friends users
      this.storePendingFriends.forEach(data => {
        //requester shouldnt be able to approve just see it as pending
        if (this.currentUser.id == data.requester){     
          this.dataService.getUserById(data.decider).subscribe(data => {
            this.populatedFriendsRequester.push(data);
          });
          //decider will be able to approve or reject
        } else if (this.currentUser.id == data.decider) {
          this.dataService.getUserById(data.requester).subscribe(data => {
            this.populatedFriendsDecider.push(data);
          });
        }
      });
    });
  }

  onClickAcceptFriend(i: number) {
    let updateFriend = new Friend();
    updateFriend.friendsId = i;
    updateFriend.status = "Approved";
    this.authService.updateFriends(updateFriend).subscribe(data =>{
      this.sessionService.reloadCurrentPage();
    })
  }

  onClickRejectFriend(i : number) {
    let updateFriend = new Friend();
    updateFriend.friendsId = i;
    updateFriend.status = "Denied";
    this.authService.updateFriends(updateFriend).subscribe(data =>{
      this.sessionService.reloadCurrentPage();
    })
  }

}

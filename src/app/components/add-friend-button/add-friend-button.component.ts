import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Friend } from 'src/app/models/friends';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-friend-button',
  templateUrl: './add-friend-button.component.html',
  styleUrls: ['./add-friend-button.component.css']
})
export class AddFriendButtonComponent implements OnInit {

  statusText = "";
  display = true;
  user: any = User;
  friend: Friend = new Friend();
  userId: any;
  

  constructor(
    private sessionService: SessionsService,
    private aurthSerivce: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
    
   }

  ngOnInit(): void {
    this.checkIfFriendshipStatus();
  }

  OnclickAddFriend() {
    //need to add checker if friend is astablished or pending.
    this.user = this.sessionService.getSession('userAccount');
    this.friend.requester = parseInt(this.user.id);
    this.friend.decider = parseInt(this.userId);
    console.log(this.user);
    this.friend.status = "Pending";
    console.log(this.friend);
    this.aurthSerivce.addFriend(this.friend).subscribe(response => {
      console.log(response);
    });
  }

  checkIfFriendshipStatus(){
    // get the row if it exist.
    this.user = this.sessionService.getSession('userAccount');
    this.friend.requester = parseInt(this.user.id);
    this.friend.decider = parseInt(this.userId);
    console.log(this.friend);
    this.aurthSerivce.checkFriendRecord(this.friend).subscribe(data => {
      console.log(data);
    });
  }  
}

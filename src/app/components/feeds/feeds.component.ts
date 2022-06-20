import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Friend } from 'src/app/models/friends';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { SessionsService } from 'src/app/services/sessions.service';

export interface DialogData {
  picture: string;

}

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  currentUser = this.sessionService.getSession("userAccount");
  getFriend = new Friend();
  yourFeedItems: any[] = []
  allFeedItems: any[] = []
  allFriendItems: any[] = []
  filterLoaded!: Promise<boolean>;
  friendPostsLoaded!: Promise<boolean>;
  friends: any[] = []

  constructor(public dialog: MatDialog, private sessionService: SessionsService, private dataService: DataService, private authService: AuthService) {

    this.getFriend.requester = this.currentUser.id;
    console.log(this.getFriend.requester);
    this.getFriend.status = "Approved";
  }

  ngOnInit(): void {
    this.currentUser = this.sessionService.getSession("userAccount")

    this.dataService.getPostById(this.currentUser.id).subscribe(response => {
      this.yourFeedItems = response.map((item: any) => {
        return {
          firstName: this.currentUser.firstName,
          lastName: this.currentUser.lastName,
          imgURL: item.imgURL,
          message: item.message,
          userId: this.currentUser.id
        }
      }).reverse()
    });

    this.dataService.getAllPublicPost().subscribe(res => {
      res.forEach((item: any) => {
        if (item.userId != this.currentUser.id) {
          this.dataService.getUserById(item.userId).subscribe({
            next: (res2) => {
              this.allFeedItems.push({
                firstName: res2.firstName,
                lastName: res2.lastName,
                imgURL: item.imgURL,
                message: item.message,
                userId: res2.id
              })
            },
            complete: () => {
              this.allFeedItems.reverse();
              this.filterLoaded = Promise.resolve(true);
            }
          })
        }
      })
    })

    this.dataService.getAllPost().subscribe({
      next: (posts) => {
        this.authService.searchFriends(this.getFriend).subscribe({
          next: (data) => {
            data.forEach((friendData: { requester: any; decider: any; }) => {
              if (this.currentUser.id != friendData.requester) {
                this.friends.push(friendData.requester)
              } else if (this.currentUser.id != friendData.decider) {
                this.friends.push(friendData.decider)
              }

            })
          },
          complete: () => {
            posts.forEach((item: any) => {
              if (this.friends.includes(item.userId)) {
                this.dataService.getUserById(item.userId).subscribe({
                  next: (res2) => {
                    this.allFriendItems.push({
                      firstName: res2.firstName,
                      lastName: res2.lastName,
                      imgURL: item.imgURL,
                      message: item.message,
                      userId: res2.id,
                    })
                  }
                })
              }
            })
          }
        })
      },
      complete: () => {
        this.allFriendItems.reverse();
        this.friendPostsLoaded = Promise.resolve(true);
      }
    })

  }

  openDialog(picture: string): void {
    const dialogRef = this.dialog.open(PictureOnFeed, {
      width: '100',
      data: { picture }
    });
  }
}

@Component({
  selector: 'picture',
  templateUrl: 'picture.component.html',
  styleUrls: ['./feeds.component.css']
})
export class PictureOnFeed {
  constructor(
    public dialogRef: MatDialogRef<PictureOnFeed>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}






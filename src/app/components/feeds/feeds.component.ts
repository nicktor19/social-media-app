import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  yourFeedItems: any[] = []
  allFeedItems: any[] = []
  testFeedItems: any[] = []
  filterLoaded!: Promise<boolean>;

  constructor(public dialog: MatDialog, private sessionService: SessionsService, private dataService: DataService) {

  }

  ngOnInit(): void {
    let user = this.sessionService.getSession("userAccount")

    this.dataService.getPostById(user.id).subscribe(response => {
      this.yourFeedItems = response.map((item: any) => {
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          imgURL: item.imgURL,
          message: item.message
        }
      }).reverse()
    });

    this.dataService.getAllPost().subscribe(res => {
      res.forEach((item: any) => {
        if (item.userId != user.id) {
          this.dataService.getUserById(item.userId).subscribe({
            next: (res2) => {
              this.allFeedItems.push({
                firstName: res2.firstName,
                lastName: res2.lastName,
                imgURL: item.imgURL,
                message: item.message
              })},
            complete: () => {
              this.allFeedItems.reverse();
              this.filterLoaded = Promise.resolve(true);
            }
          })
        }
      })

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






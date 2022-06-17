import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  picture: string;
  
}

 @Component({
    selector: 'app-feeds',
    templateUrl: './feeds.component.html',
    styleUrls: ['./feeds.component.css']
  })
export class FeedsComponent implements OnInit {
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void { }

  openDialog(picture:string): void {
    const dialogRef = this.dialog.open(PictureOnFeed, {
      width: '100',
      data: {picture}
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
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}






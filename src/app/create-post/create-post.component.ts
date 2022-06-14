import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  firstName: string = "Jeffrey";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(CreatePostDialog, {
      hasBackdrop: true,
      width: '500px'
    });
  }

}

@Component({
  selector: 'create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post.component.css']

})
export class CreatePostDialog implements OnInit{
  srcResult: any[];
  constructor(public dialogRef: MatDialogRef<CreatePostComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _ngZone: NgZone){
    this.srcResult = [];
  }

  ngOnInit(): void {
      
  }
  clickToClose(){
    this.dialogRef.close();
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}

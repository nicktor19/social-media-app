import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  firstName: string = "Naymar";
  lastName: string = "Jr";
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
  styles: [
    `mat-form-field {
      width: 100%;
    }`
  ]
})
export class CreatePostDialog implements OnInit{
  formData:FormData = new FormData();
  srcResult: any[];
  firstName: string = "Naymar"
  lastName: string = "Jr"
  constructor(public dialogRef: MatDialogRef<CreatePostComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _ngZone: NgZone, private authService: AuthService){
    this.srcResult = [];
  }

  ngOnInit(): void {
      
  }
  clickToClose(){
    this.dialogRef.close();
  }
  onSubmitHandler(data: any){
    this.formData.append('postMessage',data.message)
    this.formData.append('postImg', data.postImg)
    this.authService.addPost(this.formData).subscribe(response =>{
      console.log(response);
    })
  }

}

import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { SessionsService } from '../services/sessions.service';
import { User } from '../models/user';
import { Post } from '../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  user : any = User;

  constructor(
    public dialog: MatDialog,
    private sessionServices: SessionsService
    ) { }

  ngOnInit(): void {
    this.user = this.sessionServices.getSession("userAccount");
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
  
  user: any = User;
  post: Post = new Post();

  constructor(
    public dialogRef: MatDialogRef<CreatePostComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private _ngZone: NgZone, 
    private authService: AuthService,
    private sessionServices: SessionsService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    this.user = this.sessionServices.getSession("userAccount");
    this.post = new Post(this.user.id)
  }
  clickToClose(){
    this.dialogRef.close();
  }
  onSubmitHandler(){
    this.authService.addPost(this.post).subscribe({
      next: (v) => window.location.reload(),
      error: (e) => console.log(e)
    });
    
  }

}

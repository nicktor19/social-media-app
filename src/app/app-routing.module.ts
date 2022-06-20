import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsRequestsComponent } from './components/friends-requests/friends-requests.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreatePostComponent, CreatePostDialog } from './create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';
import { AddFriendButtonComponent } from './components/add-friend-button/add-friend-button.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'profile/:userId', component: UsersProfileComponent }, //todo
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'friendsRequest', component: FriendsRequestsComponent }, // delete
  { path: 'test', component: EditProfileComponent }, //delete
  { path: 'test1', component: CreatePostComponent }, //delete
  { path: 'friends', component: FriendsListComponent }, //delete
  { path: 'feeds', component: FeedsComponent }, //delete  
  { path: 'button', component: AddFriendButtonComponent },//delete  
  { path: '**', component: ErrorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

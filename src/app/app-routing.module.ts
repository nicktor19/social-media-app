import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsRequestsComponent } from './components/friends-requests/friends-requests.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'test', component: EditProfileComponent },
  { path: 'friends', component: FriendsListComponent },
  { path: 'friendsr', component: FriendsRequestsComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'friends', component: FriendsListComponent },
  { path: 'test', component: EditProfileComponent }, //delete
  { path: 'friends', component: FriendsListComponent }, //delete
  { path: 'feeds', component: FeedsComponent } //delete
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

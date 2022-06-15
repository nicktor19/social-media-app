import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'test', component: EditProfileComponent },
  { path: 'friends', component: FriendsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

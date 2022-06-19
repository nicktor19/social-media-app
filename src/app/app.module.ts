import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreatePostComponent, CreatePostDialog } from './create-post/create-post.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { RegLandingComponent } from './components/reg-landing/reg-landing.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FriendsRequestsComponent } from './components/friends-requests/friends-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';
import { AddFriendButtonComponent } from './components/add-friend-button/add-friend-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    CreatePostComponent,
    CreatePostDialog,
    RegisterpageComponent,
    RegLandingComponent,
    ProfilePageComponent,
    FriendsListComponent,
    EditProfileComponent,
    FeedsComponent,
    FriendsRequestsComponent,
    DashboardComponent,
    UsersProfileComponent,
    AddFriendButtonComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

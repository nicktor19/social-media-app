import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterpageComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'test', component: CreatePostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

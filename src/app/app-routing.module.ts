import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterpageComponent},
  { path: 'profile', component: ProfilePageComponent},
  {path: 'test', component: CreatePostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

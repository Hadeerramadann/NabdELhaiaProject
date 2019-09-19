import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { MainProfileComponent } from './shared/main-profile/main-profile.component';
import { CookieService } from 'ngx-cookie-service';
import { PostBodyComponent } from './post-body/post-body.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomePageComponent} from './homePage/homePage.component';
import{AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';
import {TeamComponent} from './team/team.component';
import {ImageUploadComponent} from './image-upload/image-upload.component'



//import {HomeComponent} from './home_firtPage/home.component';

  import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    HomeLayoutComponent,
    LoginComponent,
    MainProfileComponent,
    PostBodyComponent ,
    NavbarComponent,
    GalleryComponent,
    TeamComponent,
    AboutComponent,
    HomePageComponent,
    LogoutComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

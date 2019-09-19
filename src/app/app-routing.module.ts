import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import{SignUpComponent} from './sign-up/sign-up.component';
import{LoginComponent} from './login/login.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { MainProfileComponent } from './shared/main-profile/main-profile.component';
import {HttpClientModule} from '@angular/common/http'
import { AuthentecationGuard } from './shared/authentecation.guard';
import {BrowserModule} from '@angular/platform-browser'
const routes: Routes = [
  {path:'home',component:HomeLayoutComponent,children:[
    
  ]},

  {path:'profile',component:MainProfileComponent,
   loadChildren:'./profile/profile.module#ProfileModule',canActivate:[AuthentecationGuard]
},
  {path:'sign-up',component:SignUpComponent},   
  {path:'login',component:LoginComponent},
  {path:'',component:HomeLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,HttpClientModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

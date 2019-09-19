import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContintComponent } from './contint/contint.component';
import {Route, RouterModule} from '@angular/router';
import { RequestComponent } from './request/request.component';
import { PostBodyComponent } from './post-body/post-body.component';
import { PostContentComponent } from './post-content/post-content.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {PostBodyProfileComponent} from './post-body-profile/post-body.component';
import { from } from 'rxjs';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { PostContentCommentComponent } from './post-content-comment/post-content-comment.component';
const routes:Route[]=[

  {path:'profile-content',component:ContintComponent},
  {path:'request',component:RequestComponent},
  {path:'Posts',component:PostBodyComponent},
  {path:'postcomment/:id',component:PostContentCommentComponent},
 // {path:'PostsProfile',component:PostBodyProfileComponent},
  {path:'Posts/:bloodtype',component:PostBodyComponent},
  {path:'',component:UserPostsComponent}

];
@NgModule({
  declarations: [ContintComponent, RequestComponent, PostBodyComponent, PostContentComponent, UserPostsComponent, PostContentCommentComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
   // PostBodyProfileComponent
  ]
})
export class ProfileModule { }

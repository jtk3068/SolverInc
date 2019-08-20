import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {MainComponent} from "./components/main/main.component";
import {RedditListComponent} from "./components/main/reddit-list/reddit-list.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'comments', component: CommentsComponent},
  {path: 'reddit-list', component: RedditListComponent},
  { path: '**', redirectTo: '' }


];
//
// @NgModule({
//   declarations: [CommentsComponent],
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class AppRoutingModule { }


export const AppRoutingModule = RouterModule.forRoot(routes);

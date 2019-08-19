import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RedditListComponent } from './components/main/reddit-list/reddit-list.component';
import { TableModule } from 'primeng/table';
import {RedditService} from "./services/reddit.service";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RedditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [
    RedditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

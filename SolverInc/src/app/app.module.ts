import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RedditListComponent } from './components/main/reddit-list/reddit-list.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RedditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

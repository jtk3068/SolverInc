import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/src/app/components/main/main.component';
import { RedditListComponent } from './components/main/reddit-list/reddit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RedditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

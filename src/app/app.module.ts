import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetComponent } from './tweets/tweet/tweet.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { TweetDetailsComponent } from './tweets/tweet/tweet-details/tweet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetsComponent,
    TweetComponent,
    HeaderComponent,
    FooterComponent,
    TweetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

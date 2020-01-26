import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var CONST = {
  tweets:' https://angular-sample-twitter.firebaseio.com/tweets.json'
}
@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }
  getAllTweets(){
    return this.http.get(CONST.tweets)
  }
}

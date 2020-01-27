import { Component, OnInit } from '@angular/core';
import {TweetsService} from '../services/tweets.service';
import {TweetModel} from './tweet.model'
import { Store, select } from '@ngrx/store';
import { selectTweetsList } from '../store/selectors/tweets.selectors';
import { GetTweets } from '../store/actions/tweets.action';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  tweets:Array<TweetModel>;
  tweet:TweetModel;
  constructor(private tweetsService:TweetsService,private _store: Store<any>) { }
  tweets$ = this._store.pipe(select(selectTweetsList));

  ngOnInit() {
    console.log(this._store)
    this._store.dispatch(new GetTweets());
    // this.getAllTweets()
  }
  getAllTweets(){
    this.tweetsService.getAllTweets().subscribe((res:Array<TweetModel>) =>{
      this.tweets = res;
      console.log(this.tweets)
      this.tweet = res[0]
    },error=>{
      alert("Some Thing Wrong happend. please see the logs")
      console.log(error);
    })
  }


}

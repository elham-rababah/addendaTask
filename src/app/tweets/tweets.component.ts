import { Component, OnInit } from '@angular/core';
import {TweetsService} from '../services/tweets.service';
import {TweetModel} from './tweet.model'
import { Store, select } from '@ngrx/store';
import { selectUserList } from '../store/selectors/user.selectors';
import { GetUser } from '../store/actions/user.action';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  tweets:Array<TweetModel>;
  tweet:TweetModel;
  constructor(private tweetsService:TweetsService,private _store: Store<any>) { }
  users$ = this._store.pipe(select(selectUserList));

  ngOnInit() {
    console.log(this._store)
    this._store.dispatch(new GetUser());
    this.getAllTweets()
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

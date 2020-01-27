import { Component, OnInit } from '@angular/core';
import {TweetsService} from '../services/tweets.service';
import {TweetModel} from './tweet.model'

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  tweets:Array<TweetModel>;
  tweet:TweetModel;
  constructor(private tweetsService:TweetsService) { }

  ngOnInit() {
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

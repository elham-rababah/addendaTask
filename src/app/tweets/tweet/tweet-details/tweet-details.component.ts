import { Component, OnInit, Input } from '@angular/core';
import {TweetModel} from './../../tweet.model'

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.scss']
})
export class TweetDetailsComponent implements OnInit {
  constructor() { }
  @Input() selecteTweet:TweetModel;
  ngOnInit() {
  }

}

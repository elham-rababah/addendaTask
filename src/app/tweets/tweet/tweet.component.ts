import { Component, OnInit, Input } from '@angular/core';
import {TweetModel} from './../tweet.model'
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet:TweetModel;
  constructor() { }

  ngOnInit() {
  }

}

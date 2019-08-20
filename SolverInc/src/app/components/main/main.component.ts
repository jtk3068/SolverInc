import { Component, OnInit } from '@angular/core';
import {RedditService} from "../../services/reddit.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  subreddit: string
  constructor(private redditService: RedditService) { }

  ngOnInit() {

  }

  onSubmit()
  {
    this.redditService.subreddit = this.subreddit;
  }
}

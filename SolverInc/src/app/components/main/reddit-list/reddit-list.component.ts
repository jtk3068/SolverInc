import { Component, OnInit } from '@angular/core';
import {RedditService} from "../../../services/reddit.service";
import {Input} from "@angular/compiler/src/core";


@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {

  // @Input() subreddit:string
  constructor(
    private redditService: RedditService
  ) {

  }

  ngOnInit() {
    console.log(`hello`)
    this.redditService.getRedditPosts("pics").subscribe(posts => {
      console.log(`this is the data ${JSON.stringify(posts.data.children[2].data.title)}`)
      // console.log(`this is the data ${JSON.stringify(posts)}`)

    })
  }

}


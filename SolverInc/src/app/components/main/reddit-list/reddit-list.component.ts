import {Component, OnChanges, OnInit} from '@angular/core';
import {RedditService} from "../../../services/reddit.service";
import {Input} from "@angular/compiler/src/core";
import {RedditPost} from "../../../models/redditPost";


@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit, OnChanges {

  // @Input() subreddit:string
  posts:RedditPost[]=[];
  constructor(
    private redditService: RedditService
  ) {

  }

  ngOnInit() {
    console.log(`hello`)
    this.redditService.getRedditPosts("pics").subscribe(posts => {
      // console.log(`this is the data ${JSON.stringify(posts.data.children[2].data.title)}`)
      // console.log(`this is the data ${JSON.stringify(posts)}`)
      // console.log(`this is posts in the component ${JSON.stringify(posts[3])}`)
      this.posts = posts;
    })
  }

  ngOnChanges() {
    console.log(`this is the posts on changes ${this.posts}`)
  }

}


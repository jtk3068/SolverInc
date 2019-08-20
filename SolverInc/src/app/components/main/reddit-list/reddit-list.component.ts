import {Component, OnChanges, OnInit} from '@angular/core';
import {RedditService} from "../../../services/reddit.service";
import {Input} from "@angular/compiler/src/core";
import {RedditPost} from "../../../models/redditPost";


@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {

  // @Input() subreddit:string
  posts:RedditPost[]=[];
  cols: any[];
  first: number = 0;
  subreddit: string;

  constructor(
    private redditService: RedditService
  ) {

  }

  ngOnInit() {
    this.redditService.subreddit$.subscribe(sub => {
      this.subreddit = sub;
    })
    this.redditService.getRedditPosts(this.subreddit).subscribe(posts => {
      // console.log(`this is the data ${JSON.stringify(posts.data.children[2].data.title)}`)
      // console.log(`this is the data ${JSON.stringify(posts)}`)
      // console.log(`this is posts in the component ${JSON.stringify(posts[3])}`)
      this.posts = posts;
    })

    this.cols = [
      { field: 'thumbnail', header: 'Thumbnail' },
      { field: 'title', header: 'Title' },
      { field: 'commentPath', header: 'CommentPath' },
    ];

  }

  // ngOnChanges() {
  //   console.log(`this is the posts on changes ${this.posts}`)
  // }

  reset() {
    this.first = 0;
  }
  paginate(event) {
    this.first = event.first;
  }

  goToComments(commentPath:string) {
    this.redditService.comments = commentPath;
  }

}


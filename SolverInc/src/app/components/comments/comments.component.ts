import {Component, OnChanges, OnInit} from '@angular/core';
import {Comment} from "../../models/comment";
import {RedditService} from "../../services/reddit.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];
  cols: any[];
  commentPath: string;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() {

    this.redditService.comments$.subscribe(com => {
      this.commentPath = com;
      // console.log("this is com", com)
    })

    this.redditService.getRedditComments().subscribe(comment => {
      // console.log(`this is comments in the component oninit ${comment}`)
      this.comments = comment
    })

    this.cols = [
      { field: 'body', header: 'Comment' },
    ];
  }

  // ngOnChanges() {
  //   console.log("this is comments", this.comments)
  // }

}

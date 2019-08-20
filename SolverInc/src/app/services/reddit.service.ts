import {Injectable} from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import { map } from 'rxjs/operators';
import {RedditPost} from "../models/redditPost";
import {Comment} from "../models/comment";


@Injectable()
export class RedditService {

  /**
   * Current Post
   */
  subreddit$: Observable<string>;
  comments$: Observable<string>;

  private _commentsSource: BehaviorSubject<string>;
  private _comments: string;
  get comments(): string {
    return this._comments;
  }
  set comments(id: string) {
    this._comments = id;
    this._commentsSource.next(this._comments);
  }

  private _subredditSource: BehaviorSubject<string>;
  private _subreddit: string;
  get subreddit(): string {
    return this._subreddit;
  }
  set subreddit(id: string) {
    this._subreddit = id;
    this._subredditSource.next(this._subreddit);
  }


  constructor(private http: HttpClient) {
    this.initializeObservables();

  }

  public getRedditPosts(subreddit: string): Observable<any> {
    return this.http.get(`https://www.reddit.com/r/${subreddit}/.json`).pipe(map(res => {
      // console.log(`this is res in service ${res}`)
      // let body: any;
      // body = res.data.children;
      let posts:RedditPost[] = [];
      let children = res.data.children;
      for(var i=0 ; i < children.length; i++) {
        let post:RedditPost = new RedditPost();
        post.thumbnail = children[i].data.thumbnail ;
        post.title = children[i].data.title;
        post.commentPath = children[i].data.permalink;
        posts.push(post);
      }

      return posts;
    }))
  }

  public getRedditComments(): Observable<any> {
    return this.http.get(`https://www.reddit.com${this.comments}/.json`).pipe(map(res => {
      let comments:Comment[] = [];
      let children = res[1].data.children;
      // console.log(`this is children for comments ${JSON.stringify(children[0].data.body)}`)
      for (var i = 0; i < children.length; i++) {
        let comment:Comment = new Comment();
        comment.body = children[i].data.body;
        comments.push(comment)
      }
      // console.log(`this is comment 1 ${comments[1].body}`)
      return comments
    }))
  }


  initializeObservables(): void {
    this._subredditSource = new BehaviorSubject<string>(null);
    this.subreddit$ = this._subredditSource.asObservable();

    this._commentsSource = new BehaviorSubject<string>(null);
    this.comments$ = this._subredditSource.asObservable();
  }
}

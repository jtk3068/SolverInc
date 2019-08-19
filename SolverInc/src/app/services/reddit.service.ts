import {Injectable} from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import { map } from 'rxjs/operators';
import {RedditPost} from "../models/redditPost";


@Injectable()
export class RedditService {

  /**
   * Current Post
   */
  currentPost$: Observable<string>;
  private _currentPostSource: BehaviorSubject<string>;
  private _currentPost: string;
  get currentPost(): string {
    return this._currentPost;
  }
  set currentPost(id: string) {
    this._currentPost = id;
    this._currentPostSource.next(this._currentPost);
  }


  constructor(private http: HttpClient) {
    this.initializeObservables();

  }

  public getRedditPosts(subreddit: string): Observable<any> {
    return this.http.get(`https://www.reddit.com/r/${subreddit}/.json`).pipe(map(res => res))}


  initializeObservables(): void {
    this._currentPostSource = new BehaviorSubject<string>(null);
    this.currentPost$ = this._currentPostSource.asObservable();
  }
}

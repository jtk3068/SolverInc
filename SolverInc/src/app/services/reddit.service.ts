import {Injectable} from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

import { map } from 'rxjs/operators';
import {RedditPost} from "../models/redditPost";


@Injectable()
export class RedditService {


  constructor(
    private http: HttpClient
  ) {
  }

  public getRedditPosts(subreddit: string): Observable<any> {
    return this.http.get(`https://www.reddit.com/r/${subreddit}/.json`).pipe(map(res => res))}
}


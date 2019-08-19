export class RedditPost {

  thumbnail: string;
  title: string;
  commentPath: string;


  constructor(json?: any) {
    if (json) {
      this.deserialize(json);
    }
  }

  deserialize(json: any) {
    this.thumbnail = json.thumbnail || "";
    this.title = json.title || "";
    this.commentPath = json.commentPath || "";
  }

}

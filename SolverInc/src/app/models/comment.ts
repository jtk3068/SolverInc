export class Comment {

  body: string;



  constructor(json?: any) {
    if (json) {
      this.deserialize(json);
    }
  }

  deserialize(json: any) {
    this.body = json.body || "";
  }

}

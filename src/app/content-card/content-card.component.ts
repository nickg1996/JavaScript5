import { Component, OnInit } from '@angular/core';

// Assignment #1
export interface Content {
  readonly id: number;
  author: string;
  imgUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}

class ContentList {
  constructor(item: Content) {
    this.items = [];
    this._items[0] = item;
    ContentList.increaseCount();
  }
  static contentCount = 0;
  // tslint:disable-next-line:variable-name
  private _items: Content[];

  get items(): Content[] {
    return this._items;
  }

  set items(i) {
    this._items = i;
  }

  static increaseCount() {
    return ++ContentList.contentCount;
  }

}

// @ts-ignore
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  title: string;
  description = 'something';
  content: Content;
  cList: ContentList;

  constructor() {
    this.title = '<strong>Angular!</strong>';
    // @ts-ignore
    this.content = {
      id: 1024,
      // not sure why this wants to put endless ts-ignores
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the body of the content',
      type: 'news',
      special: true
    };
    this.cList = new ContentList(this.content);
  }

  ngOnInit() {
    console.log(this.cList.items);
    this.processContent(this.content);
  }

  processContent(c: Content): void {
    console.log(c.body);
  }
}



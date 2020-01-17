import { Component, OnInit } from '@angular/core';
import {createHostListener} from '@angular/compiler/src/core';

// Assignment #1
export interface Content {
  readonly id: number;
  type: string;
  body?: string;
}

class ContentList {
  constructor() {
    this.items = [];
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

  toString(i: number): string {
    return '<div>' + this._items[i].id + '</div>';
  }

  // addContent(content: Content) {
  //   this._items.push(content);
  //  }

  // itemNumber(content: Content) {
  //   console.log(this._items);
  // }

}

// @ts-ignore
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  title: string;
  content: Content;
  content1: Content;
  content2: Content;
  cList: ContentList;

  constructor() {
    this.title = 'Angular!';
    // @ts-ignore
    this.content = {
      id: 1024,
      body: 'This is the body of content',
      type: 'News'
    };
    this.content1 = {
      id: 1025,
      body: 'This is the body of content1',
      type: 'Sports'
    };
    this.content2 = {
      id: 1026,
      body: 'This is the body of content2',
      type: 'Gaming'
    };
    this.cList = new ContentList();
    // @ts-ignore
    this.cList.addContent('This is the added content');
    // @ts-ignore
    this.cList.itemNumber();
    console.log(this.cList);
  }

  ngOnInit() {
    console.log(this.cList.items);
    this.processContent(this.content);
  }

  processContent(c: Content): void {
    console.log(c.body);
  }
}



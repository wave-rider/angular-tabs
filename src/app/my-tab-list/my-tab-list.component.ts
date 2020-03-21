import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'app-my-tab-list',
  templateUrl: './my-tab-list.component.html',
  styleUrls: ['./my-tab-list.component.css']
})
export class MyTabListComponent implements OnInit {

  @Input()
  tabs: Tab[];

  @Input()
  aliveParent: boolean;

  @Input()
  expanded: boolean;
  
  constructor() { }

  ngOnInit() {
    console.log("My Tab List... with "+this.tabs);
  }

  onNotify()
  {
    alert('Hello here');
  }
}

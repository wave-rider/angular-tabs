import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'app-my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.css']
})
export class MyTabComponent implements OnInit {

  @Input()
  tab : Tab;
  @Input() aliveParent: boolean;

  private collapsedImage: string = "assets/collapse.png";
  private expandedImage: string = "assets/expand.png";
  
  @Input()
  public expanded: boolean;

  @Output() 
  notify = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
    console.log("Component:"+this.tab.name, " Expanded:"+this.expanded);
  }

  getImage() {
    console.log('getImage');
    if (this.tab.tabs.length==0)
      return "assets/leaf.png";
    else
      return this.expanded ? this.collapsedImage : this.expandedImage;
  }

  public OnClick()
  {
    this.notify.emit();
  }

  public OnCollapse()
  {
    this.expanded = !this.expanded;
  }

}

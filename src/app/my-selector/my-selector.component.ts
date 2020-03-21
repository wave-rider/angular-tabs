import { Component, OnInit } from '@angular/core';
import { MyTabComponent } from '../my-tab/my-tab.component';
import { Tab } from '../tab';

@Component({
  selector: 'app-my-selector',
  templateUrl: './my-selector.component.html',
  styleUrls: ['./my-selector.component.css']
})
export class MySelectorComponent implements OnInit {

  constructor() { }

  public tabs: Tab[] = [{
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    tabs: [{
      name: 'Phone XXL',
      price: 1000,
      description: 'A very large phone with one of the best screens',
      tabs:[]
    }]
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    tabs:[{
      name: 'Phone Standard',
      price: 299,
      description: '',
      tabs:[]
    }]
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: '',
    tabs:[]
  }];

  ngOnInit() {
    
  }

}

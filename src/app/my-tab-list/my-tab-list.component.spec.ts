import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabListComponent } from './my-tab-list.component';

describe('MyTabListComponent', () => {
  let component: MyTabListComponent;
  let fixture: ComponentFixture<MyTabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

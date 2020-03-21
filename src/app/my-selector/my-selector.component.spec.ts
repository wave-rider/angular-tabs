import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectorComponent } from './my-selector.component';

describe('MySelectorComponent', () => {
  let component: MySelectorComponent;
  let fixture: ComponentFixture<MySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

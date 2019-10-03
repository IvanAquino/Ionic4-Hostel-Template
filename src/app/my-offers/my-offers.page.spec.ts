import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOffersPage } from './my-offers.page';

describe('MyOffersPage', () => {
  let component: MyOffersPage;
  let fixture: ComponentFixture<MyOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOffersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nav_testComponent } from './nav_test.component';

describe('Nav_testComponent', () => {
  let component: Nav_testComponent;
  let fixture: ComponentFixture<Nav_testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav_testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav_testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

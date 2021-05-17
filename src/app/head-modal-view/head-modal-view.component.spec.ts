import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadModalViewComponent } from './head-modal-view.component';

describe('HeadModalViewComponent', () => {
  let component: HeadModalViewComponent;
  let fixture: ComponentFixture<HeadModalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadModalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

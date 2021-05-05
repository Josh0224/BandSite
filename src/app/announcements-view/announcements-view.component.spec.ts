import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsViewComponent } from './announcements-view.component';

describe('AnnouncementsViewComponent', () => {
  let component: AnnouncementsViewComponent;
  let fixture: ComponentFixture<AnnouncementsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

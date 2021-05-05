import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterInfoViewComponent } from './booster-info-view.component';

describe('BoosterInfoViewComponent', () => {
  let component: BoosterInfoViewComponent;
  let fixture: ComponentFixture<BoosterInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoosterInfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoosterInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

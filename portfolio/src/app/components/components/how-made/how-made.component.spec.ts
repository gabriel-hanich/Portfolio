import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMadeComponent } from './how-made.component';

describe('HowMadeComponent', () => {
  let component: HowMadeComponent;
  let fixture: ComponentFixture<HowMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

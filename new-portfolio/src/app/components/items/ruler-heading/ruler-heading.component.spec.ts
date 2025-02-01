import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerHeadingComponent } from './ruler-heading.component';

describe('RulerHeadingComponent', () => {
  let component: RulerHeadingComponent;
  let fixture: ComponentFixture<RulerHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulerHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

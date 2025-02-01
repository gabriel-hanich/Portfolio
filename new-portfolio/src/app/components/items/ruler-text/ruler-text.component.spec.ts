import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerTextComponent } from './ruler-text.component';

describe('RulerTextComponent', () => {
  let component: RulerTextComponent;
  let fixture: ComponentFixture<RulerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulerTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

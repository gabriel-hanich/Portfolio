import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinderHeroComponent } from './binder-hero.component';

describe('BinderHeroComponent', () => {
  let component: BinderHeroComponent;
  let fixture: ComponentFixture<BinderHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinderHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinderHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

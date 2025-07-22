import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperHeroComponent } from './newspaper-hero.component';

describe('NewspaperHeroComponent', () => {
  let component: NewspaperHeroComponent;
  let fixture: ComponentFixture<NewspaperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

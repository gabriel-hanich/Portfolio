import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRotundaComponent } from './projects-rotunda.component';

describe('ProjectsRotundaComponent', () => {
  let component: ProjectsRotundaComponent;
  let fixture: ComponentFixture<ProjectsRotundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsRotundaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsRotundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

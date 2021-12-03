import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorFormComponent } from './prestador-form.component';

describe('PrestadorFormComponent', () => {
  let component: PrestadorFormComponent;
  let fixture: ComponentFixture<PrestadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

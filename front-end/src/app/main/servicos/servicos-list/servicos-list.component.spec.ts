import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosListComponent } from './servicos-list.component';

describe('ServicosListComponent', () => {
  let component: ServicosListComponent;
  let fixture: ComponentFixture<ServicosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

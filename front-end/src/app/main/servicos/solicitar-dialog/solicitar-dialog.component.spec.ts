import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDialogComponent } from './solicitar-dialog.component';

describe('SolicitarDialogComponent', () => {
  let component: SolicitarDialogComponent;
  let fixture: ComponentFixture<SolicitarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

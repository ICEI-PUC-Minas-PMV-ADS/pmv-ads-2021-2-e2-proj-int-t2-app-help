import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosSolicitadosComponent } from './servicos-solicitados.component';

describe('ServicosSolicitadosComponent', () => {
  let component: ServicosSolicitadosComponent;
  let fixture: ComponentFixture<ServicosSolicitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosSolicitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosSolicitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

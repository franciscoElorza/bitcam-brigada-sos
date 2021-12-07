import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadaEmergenciaComponent } from './llamada-emergencia.component';

describe('LlamadaEmergenciaComponent', () => {
  let component: LlamadaEmergenciaComponent;
  let fixture: ComponentFixture<LlamadaEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamadaEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamadaEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

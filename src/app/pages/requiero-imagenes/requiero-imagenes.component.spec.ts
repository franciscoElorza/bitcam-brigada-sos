import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequieroImagenesComponent } from './requiero-imagenes.component';

describe('RequieroImagenesComponent', () => {
  let component: RequieroImagenesComponent;
  let fixture: ComponentFixture<RequieroImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequieroImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequieroImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

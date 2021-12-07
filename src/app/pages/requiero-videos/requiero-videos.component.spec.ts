import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequieroVideosComponent } from './requiero-videos.component';

describe('RequieroVideosComponent', () => {
  let component: RequieroVideosComponent;
  let fixture: ComponentFixture<RequieroVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequieroVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequieroVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

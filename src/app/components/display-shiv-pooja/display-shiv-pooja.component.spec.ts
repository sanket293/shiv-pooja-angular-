import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShivPoojaComponent } from './display-shiv-pooja.component';

describe('DisplayShivPoojaComponent', () => {
  let component: DisplayShivPoojaComponent;
  let fixture: ComponentFixture<DisplayShivPoojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShivPoojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShivPoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

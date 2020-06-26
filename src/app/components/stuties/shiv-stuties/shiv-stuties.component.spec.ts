import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivStutiesComponent } from './shiv-stuties.component';

describe('ShivStutiesComponent', () => {
  let component: ShivStutiesComponent;
  let fixture: ComponentFixture<ShivStutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShivStutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivStutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

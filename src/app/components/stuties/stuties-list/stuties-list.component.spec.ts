import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StutiesListComponent } from './stuties-list.component';

describe('StutiesListComponent', () => {
  let component: StutiesListComponent;
  let fixture: ComponentFixture<StutiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StutiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StutiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

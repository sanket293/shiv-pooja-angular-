import { TestBed } from '@angular/core/testing';

import { ShivstutiesService } from './shivstuties.service';

describe('ShivstutiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShivstutiesService = TestBed.get(ShivstutiesService);
    expect(service).toBeTruthy();
  });
});

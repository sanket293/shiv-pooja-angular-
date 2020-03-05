import { TestBed } from '@angular/core/testing';

import { ShivpoojaService } from './shivpooja.service';

describe('ShivpoojaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShivpoojaService = TestBed.get(ShivpoojaService);
    expect(service).toBeTruthy();
  });
});

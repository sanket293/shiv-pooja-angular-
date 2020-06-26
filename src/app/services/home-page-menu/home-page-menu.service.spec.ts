import { TestBed } from '@angular/core/testing';

import { HomePageMenuService } from './home-page-menu.service';

describe('HomePageMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePageMenuService = TestBed.get(HomePageMenuService);
    expect(service).toBeTruthy();
  });
});

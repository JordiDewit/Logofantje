import { TestBed } from '@angular/core/testing';

import { FavorietDataService } from './favoriet-data.service';

describe('FavorietDataService', () => {
  let service: FavorietDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorietDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

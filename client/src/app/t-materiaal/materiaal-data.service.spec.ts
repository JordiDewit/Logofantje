import { TestBed } from '@angular/core/testing';

import { MateriaalDataService } from './materiaal-data.service';

describe('MateriaalDataService', () => {
  let service: MateriaalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriaalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TotalContratsService } from '../get-list-of-lists.service';

describe('TotalContratsService', () => {
  let service: TotalContratsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalContratsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetListOfFormsService } from './get-list-of-forms.service';

describe('GetListOfFormsService', () => {
  let service: GetListOfFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListOfFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

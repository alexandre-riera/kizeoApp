import { TestBed } from '@angular/core/testing';

import { GetFormDefinitionService } from './get-form-definition.service';

describe('GetFormDefinitionService', () => {
  let service: GetFormDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFormDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

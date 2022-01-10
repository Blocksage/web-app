import { TestBed } from '@angular/core/testing';

import { GqlConstantsService } from './gql-constants.service';

describe('GqlConstantsService', () => {
  let service: GqlConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GqlConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

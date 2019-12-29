import { TestBed } from '@angular/core/testing';

import { AngularSubstanceService } from './angular-substance.service';

describe('AngularSubstanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularSubstanceService = TestBed.get(AngularSubstanceService);
    expect(service).toBeTruthy();
  });
});

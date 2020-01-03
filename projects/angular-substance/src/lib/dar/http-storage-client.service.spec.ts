import { TestBed } from '@angular/core/testing';

import { HttpStorageClientService } from './http-storage-client.service';

describe('HttpStorageClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpStorageClientService = TestBed.get(HttpStorageClientService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { EditorPackageService } from './editor-package.service';

describe('EditorPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorPackageService]
    });
  });

  it('should be created', inject([EditorPackageService], (service: EditorPackageService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LakeService } from './lake.service';

describe('LakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LakeService]
    });
  });

  it('should be created', inject([LakeService], (service: LakeService) => {
    expect(service).toBeTruthy();
  }));
});

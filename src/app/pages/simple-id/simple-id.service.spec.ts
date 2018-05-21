import { TestBed, inject } from '@angular/core/testing';

import { SimpleIdService } from './simple-id.service';

describe('SimpleIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleIdService]
    });
  });

  it('should be created', inject([SimpleIdService], (service: SimpleIdService) => {
    expect(service).toBeTruthy();
  }));
});

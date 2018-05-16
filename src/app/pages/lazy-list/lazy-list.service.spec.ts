import { TestBed, inject } from '@angular/core/testing';

import { LazyListService } from './lazy-list.service';

describe('LazyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyListService]
    });
  });

  it('should be created', inject([LazyListService], (service: LazyListService) => {
    expect(service).toBeTruthy();
  }));
});

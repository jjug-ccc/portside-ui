import { TestBed, inject } from '@angular/core/testing';

import { CustomRequestOptionsService } from './custom-request-options.service';

describe('CustomRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomRequestOptionsService]
    });
  });

  it('should be created', inject([CustomRequestOptionsService], (service: CustomRequestOptionsService) => {
    expect(service).toBeTruthy();
  }));
});

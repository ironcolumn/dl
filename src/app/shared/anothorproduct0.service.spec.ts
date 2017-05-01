import { TestBed, inject } from '@angular/core/testing';

import { Anothorproduct0Service } from './anothorproduct0.service';

describe('Anothorproduct0Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Anothorproduct0Service]
    });
  });

  it('should ...', inject([Anothorproduct0Service], (service: Anothorproduct0Service) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptor]
    });
  });

  it('should be created', inject([TokenInterceptor], (interceptor: TokenInterceptor) => {
    expect(interceptor).toBeTruthy();
  }));
});

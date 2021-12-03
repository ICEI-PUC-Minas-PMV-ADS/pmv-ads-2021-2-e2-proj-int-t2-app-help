import { TestBed } from '@angular/core/testing';

import { PrestadorResolver } from './prestador.resolver';

describe('PrestadorResolver', () => {
  let resolver: PrestadorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PrestadorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthoGuardGuard } from './autho-guard.guard';

describe('AuthoGuardGuard', () => {
  let guard: AuthoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

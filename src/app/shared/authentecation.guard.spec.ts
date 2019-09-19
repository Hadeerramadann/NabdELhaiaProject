import { TestBed, async, inject } from '@angular/core/testing';

import { AuthentecationGuard } from './authentecation.guard';

describe('AuthentecationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentecationGuard]
    });
  });

  it('should ...', inject([AuthentecationGuard], (guard: AuthentecationGuard) => {
    expect(guard).toBeTruthy();
  }));
});

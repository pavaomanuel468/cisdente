import { TestBed } from '@angular/core/testing';

import { UserServisseService } from './user-servisse.service';

describe('UserServisseService', () => {
  let service: UserServisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

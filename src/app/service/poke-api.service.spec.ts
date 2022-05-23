import { TestBed } from '@angular/core/testing';

import { PokeAPiService } from './poke-api.service';

describe('PokeAPiService', () => {
  let service: PokeAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

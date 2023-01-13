import { TestBed } from '@angular/core/testing';

import { EnseignantChercheurService } from './enseignant-chercheur.service';

describe('EnseignantChercheurService', () => {
  let service: EnseignantChercheurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantChercheurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

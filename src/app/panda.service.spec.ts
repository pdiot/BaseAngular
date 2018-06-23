import { TestBed, inject } from '@angular/core/testing';

import { PandaService } from './panda.service';

describe('PandaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PandaService]
    });
  });

  it('should be created', inject([PandaService], (service: PandaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { CascadDropDataService } from './cascad-drop-data.service';

describe('CascadDropDataService', () => {
  let service: CascadDropDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascadDropDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

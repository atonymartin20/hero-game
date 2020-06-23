import { TestBed } from '@angular/core/testing';

import { BattleMessageService } from './battle-message.service';

describe('BattleMessageService', () => {
  let service: BattleMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleMessagesComponent } from './battle-messages.component';

describe('BattleMessagesComponent', () => {
  let component: BattleMessagesComponent;
  let fixture: ComponentFixture<BattleMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

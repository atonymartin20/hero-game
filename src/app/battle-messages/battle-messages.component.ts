import { Component, OnInit } from '@angular/core';
import { BattleMessageService } from '../battle-message.service';

@Component({
  selector: 'app-battle-messages',
  templateUrl: './battle-messages.component.html',
  styleUrls: ['./battle-messages.component.css']
})
export class BattleMessagesComponent implements OnInit {

  constructor(public battleMessageService: BattleMessageService) { }

  ngOnInit(): void {
  }

}
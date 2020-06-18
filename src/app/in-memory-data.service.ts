import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const heroes = [
      { id: 1, name: 'Black Panther', atk: 53, def: 13, hp: 128, lvl: 1 },
      { id: 2, name: 'Black Widow', atk: 45, def: 8, hp: 128, lvl: 1 },
      { id: 3, name: 'Captain America', atk: 43, def: 13, hp: 140, lvl: 1 },
      { id: 4, name: 'Captain Marvel', atk: 58, def: 9, hp: 208, lvl: 1 },
      { id: 5, name: 'Dr. Strange', atk: 40, def: 5, hp: 130, lvl: 1 },
      { id: 6, name: 'Groot', atk: 56, def: 15, hp: 188, lvl: 1 },
      { id: 7, name: 'Hawkeye', atk: 45, def: 8, hp: 133, lvl: 1 },
      { id: 8, name: 'Hulk', atk: 58, def: 10, hp: 281, lvl: 1 },
      { id: 9, name: 'Iron Man', atk: 63, def: 15, hp: 146, lvl: 1 },
      { id: 10, name: 'Quake', atk: 53, def: 5, hp: 128, lvl: 1 },
      { id: 11, name: 'Rocket Raccoon', atk: 66, def: 6, hp: 128, lvl: 1 },
      { id: 12, name: 'Spider-Man', atk: 60, def: 1, hp: 128, lvl: 1 },
      { id: 13, name: 'Star-Lord', atk: 45, def: 10, hp: 135, lvl: 1 },
      { id: 14, name: 'Thor', atk: 56, def: 10, hp: 180, lvl: 1 },
      { id: 15, name: 'Vision', atk: 53, def: 11, hp: 128, lvl: 1 },
      { id: 16, name: 'Green Goblin', atk: 53, def: 10, hp: 210, lvl: 1 },
      { id: 17, name: 'Hela', atk: 67, def: 10, hp: 158, lvl: 1 },
      { id: 18, name: 'Loki', atk: 50, def: 6, hp: 150, lvl: 1 },
      { id: 19, name: 'Magneto', atk: 58, def: 13, hp: 158, lvl: 1},
      { id: 20, name: 'Red Skull', atk: 43, def: 10, hp: 208, lvl: 1 },
      { id: 21, name: 'Thanos', atk: 51, def: 8, hp: 300, lvl: 1 },
      { id: 22, name: 'Ultron', atk: 63, def: 15, hp: 195, lvl: 1 },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

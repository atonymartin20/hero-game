import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  hero: Hero = {
    id: HeroesComponent.length,
    name: '',
    atk: 3,
    def: 3,
    hp: 30,
    lvl: 1
  };
  error: boolean

  constructor() { }
  
  ngOnInit(): void {
  }

  @Output() heroSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  addHero(): void {
    if(this.hero.name !== '') {
      console.log(this.hero.id, this.hero.name, this.hero.atk, this.hero.def, this.hero.hp, this.hero.lvl);
      this.heroSubmit.emit(false);
    }
    else {
      this.error = true;
      console.log('name is empty')
    }
  }

}

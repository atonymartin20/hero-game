import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
    atk: 53,
    def: 9,
    hp: 130,
    lvl: 1,
    img: '',
  };
  error: boolean

  constructor() { }
  
  ngOnInit(): void {
  }

  @Input() function: any;
  @Output() heroSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  addHeroChild(): void {
    if(this.hero.name !== '') {
      this.function(this.hero.name.trim(), this.hero.atk, this.hero.def, this.hero.hp, this.hero.lvl, this.hero.img)
      this.heroSubmit.emit(false);
    }
    else {
      this.error = true;
      console.log('name cannot be empty')
    }
  }
}

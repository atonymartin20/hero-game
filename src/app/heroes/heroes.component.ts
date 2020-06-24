import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  addHero: boolean = false;
  valueEmittedFromChild: boolean;

  closeAddAHeroParent(valueEmitted) {
    this.valueEmittedFromChild = valueEmitted;
    this.addHero = valueEmitted;
    console.log(valueEmitted)
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.log('Getting Heroes');
  };

  openAddAHero(): void {
    this.addHero = true;
  }

  closeAddAHero(): void {
    this.addHero = false;
  }

  add = (name: string, atk: number, def: number, hp: number, lvl: number) => {
    this.heroService.addHero({ name, atk, def, hp, lvl } as Hero).subscribe(hero => { this.heroes.push(hero)});
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  heroes: Hero[];
  attackingHero: Hero[];
  defendingHero: Hero[];
  attackingHeroSelected: boolean = false;
  defendingHeroSelected: boolean = false;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.log('Getting Battle Heroes')
  }

  battle(): void {
    console.log(this.attackingHero, this.defendingHero);
    console.log('Hero A vs Hero B')
  }

  selectAttackingHero(hero): void {
    this.attackingHero = hero
    console.log(this.attackingHero)
    this.attackingHeroSelected = true;
  }

  resetAttackingHero(): void {
    this.attackingHero = null;
    this.attackingHeroSelected = false;
  }

  selectDefendingHero(hero): void {
    this.defendingHero = hero
    console.log(this.defendingHero)
    this.defendingHeroSelected = true;
  }

  resetDefendingHero(): void {
    this.defendingHero = null;
    this.defendingHeroSelected = false;
  }
}

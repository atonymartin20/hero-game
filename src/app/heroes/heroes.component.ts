import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

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

  constructor() { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log('Getting Heroes')
  };

  openAddAHero(): void {
    this.addHero = true;
  }

  closeAddAHero(): void {
    this.addHero = false;
  }

  edit(): void {

  }

  delete(): void {
    
  }
}

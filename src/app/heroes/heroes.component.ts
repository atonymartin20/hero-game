import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  addAHero: false;

  constructor() { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {

  };

  add(): void {

  }

  edit(): void {

  }

  delete(): void {
    
  }
}

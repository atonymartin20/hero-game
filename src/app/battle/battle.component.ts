import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-battle',
    templateUrl: './battle.component.html',
    styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {
    heroes: Hero[];
    attackingHero: Hero[];
    defendingHero: Hero[];
    attackingHeroSelected: boolean = false;
    defendingHeroSelected: boolean = false;

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
        console.log('Getting Battle Heroes');
    }

    battle(): void {
        this.heroService.clearMessages();
       
        if (this.attackingHero !== null && this.defendingHero !== null) {
            let attackersHP = this.attackingHero['hp'];
            let defendersHP = this.defendingHero['hp'];
            let criticalHitPercentage = 0.1;

            this.heroService.log(`${this.attackingHero['name']} vs ${this.defendingHero['name']}`);
            while (attackersHP > 0 && defendersHP > 0) {
                if (attackersHP > 0) {
                    if (Math.random() < criticalHitPercentage) {
                        let damage = Math.floor(this.attackingHero['atk'] * 1.5 - this.defendingHero['def']);
                        if (defendersHP <= damage) {
                            this.heroService.log(`${this.attackingHero['name']} lands a critical hit finishing off ${this.defendingHero['name']}.`);
                            this.heroService.log(`${this.attackingHero['name']} wins.`)
                            defendersHP -= damage;
                            return null;
                        } else {
                            defendersHP -= damage;
                            this.heroService.log(`${this.attackingHero['name']} lands a critical hit dealing ${damage} damage.`);
                            this.heroService.log(`${this.defendingHero['name']} has ${defendersHP} HP remaining.`);
                        }
                    } else {
                        let damage = this.attackingHero['atk'] - this.defendingHero['def'];
                        if (defendersHP <= damage) {
                            this.heroService.log(`${this.attackingHero['name']} lands the final blow on ${this.defendingHero['name']}.`);
                            this.heroService.log(`${this.attackingHero['name']} wins.`)
                            defendersHP -= damage;
                            return null;
                        } else {
                            defendersHP -= damage;
                            if (Math.random() < .33) {
                                this.heroService.log(`${this.attackingHero['name']} attacks dealing ${damage} damage.`);
                            }
                            else if (Math.random() < .67) {
                                this.heroService.log(`${this.attackingHero['name']} strikes dealing ${damage} damage.`);
                            }
                            else {
                                this.heroService.log(`${this.attackingHero['name']} charges dealing ${damage} damage.`);
                            }
                            this.heroService.log(`${this.defendingHero['name']} has ${defendersHP} HP remaining.`);
                        }
                    }
                }
                if (defendersHP > 0) {
                    if (Math.random() < criticalHitPercentage) {
                        let damage = Math.floor(this.defendingHero['atk'] * 1.5 - this.attackingHero['def']);
                        if (attackersHP <= damage) {
                            this.heroService.log(`${this.defendingHero['name']} lands a critical hit finishing off ${this.attackingHero['name']}.`);
                            this.heroService.log(`${this.defendingHero['name']} wins.`)
                            attackersHP -= damage;
                            return null;
                        } else {
                            attackersHP -= damage;
                            this.heroService.log(`${this.defendingHero['name']} lands a critical hit dealing ${damage} damage.`);
                            this.heroService.log(`${this.attackingHero['name']} has ${attackersHP} HP remaining.`);
                        }
                    } else {
                        let damage = this.defendingHero['atk'] - this.attackingHero['def'];
                        if (attackersHP <= damage) {
                            this.heroService.log(`${this.defendingHero['name']} lands the final blow on ${this.attackingHero['name']}.`);
                            this.heroService.log(`${this.defendingHero['name']} wins.`)
                            attackersHP -= damage;
                            return null;
                        } else {
                            attackersHP -= damage;
                            if (Math.random() < .33) {
                                this.heroService.log(`${this.defendingHero['name']} attacks dealing ${damage} damage.`);
                            }
                            else if (Math.random() < .67) {
                                this.heroService.log(`${this.defendingHero['name']} strikes dealing ${damage} damage.`);
                            }
                            else {
                                this.heroService.log(`${this.defendingHero['name']} charges dealing ${damage} damage.`);
                            }
                            this.heroService.log(`${this.attackingHero['name']} has ${attackersHP} HP remaining.`);
                        }
                    }
                }
            }
        } else {
            return null;
        }
    }

    selectAttackingHero(hero): void {
        this.attackingHero = hero;
        this.attackingHeroSelected = true;
    }

    resetAttackingHero(): void {
        this.attackingHero = null;
        this.attackingHeroSelected = false;
    }

    selectDefendingHero(hero): void {
        this.defendingHero = hero;
        this.defendingHeroSelected = true;
    }

    resetDefendingHero(): void {
        this.defendingHero = null;
        this.defendingHeroSelected = false;
    }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  error: boolean;

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  @Input() hero: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  editHero = () => {
    if (this.hero.name !== '') {
      console.log(`Updated Hero: ${this.hero.name}, atk: ${this.hero.atk}, def: ${this.hero.def}, hp: ${this.hero.hp}, lvl: ${this.hero.lvl}`)
      this.heroService.updateHero(this.hero).subscribe()
    }
    else {
      this.error = true;
      console.log('name cannot be empty')
    }
  }
}

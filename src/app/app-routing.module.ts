import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BattleComponent } from './battle/battle.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'edit/:id', component: EditHeroComponent },
  // { path: '**', component: MAKE404COMPONENT }, //Wildcard Route for a 404 page
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

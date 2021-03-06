import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { BattleMessageService } from './battle-message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl= 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Context-Type': 'application/json' })
  }

  constructor( private http: HttpClient, private battleMessageService: BattleMessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url).pipe(
      map((heroes) => heroes[0]),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  private handleError<T>(operation = 'operation', result? :T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed ${error.message}`);
      return of(result as T)
    }
  }

  clearMessages() {
    this.battleMessageService.clear();
  }
  
  log(message: string) {
    this.battleMessageService.add(`${message}`)
  }

  updateHero(hero: Hero): Observable<any> {
    if (hero.name !== '' && typeof hero.name === 'string') {
      if (typeof hero.atk === 'number') {
        if (typeof hero.def === 'number') {
          if (typeof hero.hp === 'number') {
            if (typeof hero.lvl === 'number') {
              if (typeof hero.heroIcon === 'string') {
                return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
                  catchError(this.handleError<any>('updatedHero'))
                )
              }
              else {
                console.log('hero.heroIcon is not a string')
              }
            }
            else {
              console.log('hero.lvl is not a number.')
            }
          }
          else {
            console.log('hero.hp is not a number.')
          }
        }
        else {
          console.log('hero.def is not a number.')
        }
      }
      else {
        console.log('hero.atk is not a number.')
      }
    }
    else {
      console.log('hero.name is not a string or is an empty string.')
    }
  }

  addHero(hero: Hero): Observable<Hero> {
    if (hero.name !== '' && typeof hero.name === 'string') {
      if (typeof hero.atk === 'number') {
        if (typeof hero.def === 'number') {
          if (typeof hero.hp === 'number') {
            if (typeof hero.lvl === 'number') {
              if (typeof hero.heroIcon === 'string') {
                return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
                  catchError(this.handleError<Hero>('addHero'))
                )
              }
              else {
                console.log('hero.heroIcon is not a string')
              }
            }
            else {
              console.log('hero.lvl is not a number.')
            }
          }
          else {
            console.log('hero.hp is not a number.')
          }
        }
        else {
          console.log('hero.def is not a number.')
        }
      }
      else {
        console.log('hero.atk is not a number.')
      }
    }
    else {
      console.log('hero.name is not a string or is an empty string.')
    }
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }
}

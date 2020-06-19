import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl= 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Context-Type': 'application/json' })
  }

  constructor( private http: HttpClient, private messageService: MessageService) { }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heros.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor( private http: HttpClient ) { }

  getHeros(): Observable<Hero[]>{
    return this.http.get<Hero[]>('http://localhost:3000/heroes');
  }

  getHeroById( id: string): Observable<Hero>{
    return this.http.get<Hero>(`http://localhost:3000/heroes/${id}`);
  }

  getHerosBySuperhero(superhero: string){
    return this.http.get<Hero[]>(`http://localhost:3000/heroes?q=${ superhero }&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`http://localhost:3000/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(`http://localhost:3000/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any>{
    return this.http.delete<Hero>(`http://localhost:3000/heroes/${id}`);
  }
}
 
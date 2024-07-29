import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;

  constructor( private http: HttpClient ) { }

  verifyAuthentication(): Observable<boolean>{

    if(localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`http://localhost:3000/usuarios/1`)
        .pipe(
          map( auth => {
            return true;
          })
        );
  }

  get auth(){
    return {...this._auth!}
  }

  login(){
    return this.http.get<Auth>(`http://localhost:3000/usuarios/1`)
        .pipe(
          tap( auth => this._auth = auth),
          tap( auth => localStorage.setItem('id', auth.id ) ),
        );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  url2: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(this.url + name);
  }

  getPokemonList(): Observable<any> {
    return this.http.get<any>(this.url2);
  }
}

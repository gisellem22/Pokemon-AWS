import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading = true;
  pokeList: any[];
  pokeUrlList = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemonList().subscribe(res => {
      console.log('pokemon ---->', res);
      this.pokeList = res.results;
      console.log('img ---->', this.pokeList);
      this.pokeList.forEach(poke => {
        this.pokemonService.getPokemon(poke.name).subscribe(pokemon => {
          this.pokeUrlList.push(
            {
              name: poke.name,
              url: pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']
            }
          )
          console.log('img ---->', this.pokeList);
          // this.pokeImg = res.sprites.versions['generation-v']['black-white'].animated['front_default'];
        })
      })
    })
  }

  onLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
}

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading = true;
  pokeImg: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemon('pikachu').subscribe(res => {
      console.log('pokemon ---->', res);
      this.pokeImg = res.sprites.versions['generation-v']['black-white'].animated['front_default'];
      console.log('img ---->', this.pokeImg);
    })
  }

  onLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
}

}

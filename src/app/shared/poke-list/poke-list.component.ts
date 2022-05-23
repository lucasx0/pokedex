import { Component, OnInit } from '@angular/core';
import { PokeAPiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(
    private pokeApiService: PokeAPiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListALlPokemons.subscribe(
      res => console.log(res)
    )
  }

}

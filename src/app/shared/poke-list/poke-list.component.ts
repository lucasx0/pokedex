import { Component, OnInit } from '@angular/core';
import { PokeAPiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(
    private pokeApiService: PokeAPiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListALlPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        
      }
    )
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) =>{
      return !res.name.indexOf(value.toLocaleLowerCase())
    })

    this.getAllPokemons = filter;
  }

}

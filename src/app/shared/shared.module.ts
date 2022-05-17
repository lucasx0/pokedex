import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componente
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { HomeComponent } from '../pages/home/home.component';
import { PokeListComponent } from './poke-list/poke-list.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports:[
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

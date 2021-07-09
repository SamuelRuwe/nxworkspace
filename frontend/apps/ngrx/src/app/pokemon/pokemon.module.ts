import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@nx-workspace/material';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PokemonModule {}

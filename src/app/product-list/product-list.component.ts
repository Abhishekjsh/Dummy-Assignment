import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from './../model/pokemon/pokemon.model';
import {Store} from '@ngrx/store';
import {RootStoreState} from './../root-store';
import {PokemonListStoreActions, PokemonListStoreSelectors} from './../root-store/pokemon-list-store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public isLoading$: Observable<boolean>;
  public isError$: Observable<boolean>;
  public pokemonList$: Observable<Pokemon[]>;
  
  constructor(private store$: Store<RootStoreState.State>) {
    // Selectors
    this.isLoading$ = this.store$.select(PokemonListStoreSelectors.selectPokemonListError);
    this.isError$ = this.store$.select(PokemonListStoreSelectors.selectPokemonListIsLoading);
    this.pokemonList$ = this.store$.select(PokemonListStoreSelectors.selectPokemonList);

    // Actions
    this.store$.dispatch(new PokemonListStoreActions.PokemonListLoadRequestAction());
  }

}

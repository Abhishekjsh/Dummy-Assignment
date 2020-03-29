import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as pokemonDetailActions from './actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserService} from './../../user.service';
import {Pokemon} from './../../model/pokemon/pokemon.model';


@Injectable()
export class PokemonDetailEffects {

  constructor(private pokemonService: UserService, private actions$: Actions) {
  }

  @Effect()
  loadPokemonDetail$ = this.actions$.pipe(
    ofType<pokemonDetailActions.PokemonDetailLoadRequestAction>(
      pokemonDetailActions.ActionTypes.LOAD_POKEMON_DETAIL_REQUEST
    ),
    switchMap((action) =>
      this.pokemonService.getPokemonDetail(action.pokemonId)
        .pipe(
          map((pokemon: Pokemon) => {
            return (new pokemonDetailActions.PokemonDetailLoadSuccessAction({pokemon_detail: pokemon}));
          }),
          catchError(error => of(new pokemonDetailActions.PokemonDetailLoadFailureAction(error)))
        )
    )
  );


}


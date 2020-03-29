import {Pokemon} from './../../model/pokemon/pokemon.model';

export interface State {
  pokemon_detail: Pokemon;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  pokemon_detail: null,
  isLoading: false,
  error: null
};

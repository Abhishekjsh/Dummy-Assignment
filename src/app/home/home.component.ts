import { Component } from '@angular/core';
import { UserService } from './../user.service';
// import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Pokemon} from './../model/pokemon/pokemon.model';
import {Store} from '@ngrx/store';
import {RootStoreState} from './../root-store';
import {PokemonListStoreActions, PokemonListStoreSelectors} from './../root-store/pokemon-list-store';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Users: any;

  // constructor(private UserService: UserService, private router: Router) { }

  // ngOnInit(): void {
  //   this.retrieveTutorials();
  // }

  // retrieveTutorials() {
  //   this.UserService.getAll()
  //     .subscribe(
  //       data => {
  //         this.Users = data;
  //         console.log("this.Users", this.Users);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // };
  // ImageDetail() {
  //     this.router.navigate(['/detail']);
  // }

  public isLoading$: Observable<boolean>;
  public isError$: Observable<boolean>;
  public pokemonList$: Observable<Pokemon[]>;

  constructor(private store$: Store<RootStoreState.State>, private UserService: UserService) {
    // Selectors
    this.isLoading$ = this.store$.select(PokemonListStoreSelectors.selectPokemonListError);
    this.isError$ = this.store$.select(PokemonListStoreSelectors.selectPokemonListIsLoading);
    this.pokemonList$ = this.store$.select(PokemonListStoreSelectors.selectPokemonList);

    // Actions
    this.store$.dispatch(new PokemonListStoreActions.PokemonListLoadRequestAction());
  }

  getPreviousData (){
    this.UserService.offset -= 30
    this.store$.dispatch(new PokemonListStoreActions.PokemonListLoadRequestAction());
  }

  getUpcommingData () {
    this.UserService.offset += 30
    this.store$.dispatch(new PokemonListStoreActions.PokemonListLoadRequestAction());
  }

}

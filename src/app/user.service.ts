import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  // getAll() {
  //   return this.http.get(baseUrl);
  // }

  getPokemonList(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=964');
  }

  getPokemonDetail(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}

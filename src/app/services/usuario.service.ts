import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'

  constructor( private http: HttpClient ) { }

  public getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=6`)
      .pipe(
        map(({data}:any) => data )
      )
  }

  public getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map(({data}:any) => data )
      )
  }
}

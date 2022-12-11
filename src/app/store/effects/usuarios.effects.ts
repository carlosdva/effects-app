import { cargarUsuarios } from './../actions/usuarios.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from '../actions/usuarios.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      // tap(data => console.log('effect tap', data)),
      mergeMap(
        () => this.usuarioService.getUsers()
          .pipe(
            // tap(data => console.log('getUsers effect', data))
            map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users})),
            catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
          )
      )
    )
  );

}

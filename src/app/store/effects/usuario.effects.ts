import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions/usuario.actions';
import { mergeMap, catchError, map, of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ){}

  cargaUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuario),
      mergeMap(
        (action) => this.usuarioService.getUserById(action.id)
          .pipe(
            map(user => cargarUsuarioSuccess({ usuario: user})),
            catchError(err => of(cargarUsuarioError({ payload: err })))
          )
      )
    )
  );
}

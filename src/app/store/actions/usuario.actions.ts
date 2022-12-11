import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar usuario Success',
  props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar usuario Error',
  props<{ payload: any }>()
);

import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar usuarios Success',
  props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar usuarios Error',
  props<{ payload: any }>()
);

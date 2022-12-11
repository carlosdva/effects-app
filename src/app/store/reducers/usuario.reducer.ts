import { Action, createReducer, on } from "@ngrx/store";
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from "../actions";
import { Usuario } from '../../models/usuario.model';
import { UsuarioError } from '../../models/error.model';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: UsuarioError;
}

export const usuarioInitialState = {
  user: {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  },
  loaded: false,
  loading: false,
  error: {
    url: '',
    name: '',
    message: ''
  }
}

const _usuarioReducer = createReducer(

  usuarioInitialState,

  on(cargarUsuario, (state, { id }) => (
    {
      ...state,
      loading: true,
      id: id
    })
  ),

  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...usuario}
  })),

  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    },
  })),
);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
  return _usuarioReducer(state, action);
}

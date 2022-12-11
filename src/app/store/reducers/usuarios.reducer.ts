import { Action, createReducer, on } from "@ngrx/store";
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from "../actions";
import { Usuario } from '../../models/usuario.model';
import { UsuarioError } from '../../models/error.model';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: UsuarioError;
}

export const usuariosInitialState = {
  users: [
    {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: ""
    }
  ],
  loaded: false,
  loading: false,
  error: {
    url: '',
    name: '',
    message: ''
  }
}

const _usuariosReducer = createReducer(

  usuariosInitialState,

  on(cargarUsuarios, state => ({ ...state, loading: true })),

  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })),

  on(cargarUsuariosError, (state, { payload }) => ({
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

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
  return _usuariosReducer(state, action);
}

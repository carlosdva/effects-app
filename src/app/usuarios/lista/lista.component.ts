import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {

    this.store.select('usuarios').subscribe(({ users }) => {
      this.usuarios = users;
    });

    this.store.dispatch(cargarUsuarios());
    /* this.usuarioService.getUsers()
      .subscribe(usuarios => this.usuarios = usuarios) */

  }
}

  import { Component, OnInit } from '@angular/core';
  import { UsuarioService } from '../../../services/usuario.services';

export interface Usuario {
  _id?: string; 
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
}
  @Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
  })
  export class CrudComponent implements OnInit {
usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', apellido: '', telefono: '', correo: '' };
  editando: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  agregarUsuario(): void {
    if (this.editando && this.nuevoUsuario._id) {
      this.usuarioService.actualizarUsuario(this.nuevoUsuario._id, this.nuevoUsuario).subscribe({
        next: () => {
          this.obtenerUsuarios();
          this.limpiarFormulario();
        },
        error: (error) => {
          console.error('Error al actualizar usuario:', error);
        }
      });
    } else {
      this.usuarioService.registrarUsuario(this.nuevoUsuario).subscribe({
        next: () => {
          this.obtenerUsuarios(); // recargar la lista
          this.limpiarFormulario();
        },
        error: (error) => {
          console.error('Error al agregar usuario:', error);
        }
      });
    }
  }

  editarUsuario(usuario: Usuario): void {
    this.nuevoUsuario = { ...usuario };
    this.editando = true;
  }

  eliminarUsuario(id: string): void {
    this.usuarioService.eliminarUsuario(id).subscribe({
      next: () => {
        this.obtenerUsuarios();
      },
      error: (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    });
  }

  limpiarFormulario(): void {
    this.nuevoUsuario = { nombre: '', apellido: '', telefono: '', correo: '' };
    this.editando = false;
  }
}

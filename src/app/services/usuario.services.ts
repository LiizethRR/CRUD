// src/app/empleado/empleado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/api/registro';

  constructor(private http: HttpClient) {}

  // Registrar nuevo usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  // Obtener todos los usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un usuario por ID
  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Actualizar un usuario por ID
  actualizarUsuario(id: string, usuarioActualizado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuarioActualizado);
  }

  // Eliminar un usuario por ID
  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  //descargarRegistrosPDF()
}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.services';

interface Alumno {
  id: number;
  nombre: string;
  apellidos: string;
  telefono: number;
  correo: string;

}
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent /*implements OnInit*/{

   alumnos: Alumno[] = [];
  nuevoAlumno: Alumno = { id: 0, nombre: '', apellidos: '', telefono: 0, correo: ''  };
  editando: boolean = false;
 /* constructor(private usuarioService: UsuarioService) {}
  //  ngOnInit() {

  }*/
  agregarAlumno() {
    if (this.editando) {
      const index = this.alumnos.findIndex(a => a.id === this.nuevoAlumno.id);
      if (index !== -1) {
        this.alumnos[index] = { ...this.nuevoAlumno };
      }
      this.editando = false;
    } else {
      const nuevoId = this.alumnos.length ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1;
      this.alumnos.push({ ...this.nuevoAlumno, id: nuevoId });
    }
    this.nuevoAlumno = { id: 0, nombre: '',  apellidos: '', telefono: 0, correo: ''};
  }

  editarAlumno(alumno: Alumno) {
    this.nuevoAlumno = { ...alumno };
    this.editando = true;
  }

  eliminarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
  }

  cancelar() {
    this.nuevoAlumno = { id: 0, nombre: '',  apellidos: '', telefono: 0, correo: '' };
    this.editando = false;
  }

}

import { Injectable } from '@angular/core';
import { InscripcionModel } from '../models/inscripcion-model';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
    private inscripciones: InscripcionModel[] = [];
  AgregarInscripcion(nuevo: InscripcionModel) {  //metodo para agregar
    this.inscripciones.push(nuevo);
  }
  obtenerInscripcion(){   //metodo para leer inscripcion
    return this.inscripciones;
  }
}

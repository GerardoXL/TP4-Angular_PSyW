import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscripcionModel } from '../../models/inscripcion-model';
import { InscripcionService } from '../../services/inscripcion-service';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-punto-4',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-4.html',
  styleUrl: './punto-4.css',
})
export class Punto4 {
  listaInscripciones: InscripcionModel[] = [];
  totalCalculado: number = 0;
  cant_estudiantes: number = 0;
  cant_egresados: number = 0;
  cant_particulares: number = 0;
  suma_total: number = 0;
  totalInscritos: number = 0;
  constructor(private inscripcionService: InscripcionService) {

  }
  inscripcion: InscripcionModel = {
    email: '',
    dni: 0,
    curso: '',
    precio: 0,
    categoriaAlumno: 0,
    fechaInscripcion: '',
    precioFinal: 0
  };

  calcularTotal() {// metodo para calcular el descuento 
    var descuento = 0;
    if (this.inscripcion.categoriaAlumno == 1) {
      descuento = this.inscripcion.precio * 35 / 100;
      this.totalCalculado = this.inscripcion.precio - descuento;
    } else if (this.inscripcion.categoriaAlumno == 2) {
      descuento = this.inscripcion.precio * 50 / 100;
      this.totalCalculado = this.inscripcion.precio - descuento;
    } else if (this.inscripcion.categoriaAlumno == 3) {
      this.totalCalculado = this.inscripcion.precio - descuento;
    } else
      console.log("opcion invalida");
  };
  registrar() {
    this.inscripcion.precioFinal = this.totalCalculado;
    this.inscripcionService.AgregarInscripcion(this.inscripcion);
    this.listaInscripciones = this.inscripcionService.obtenerInscripcion();
    this.inscripcion = { // limpiar formulario
      email: '',
      dni: 0,
      curso: '',
      precio: 0,
      categoriaAlumno: 0,
      fechaInscripcion: '',
      precioFinal: 0
    };
    this.obtenerResumen();
    this.totalInscritos=this.listaInscripciones.length;
  }
  obtenerResumen() {
    var i;
    this.cant_estudiantes = 0, this.suma_total = 0, this.cant_egresados = 0, this.cant_particulares = 0;
    for (i = 0; i < this.listaInscripciones.length; i++) {
      if (this.listaInscripciones[i].categoriaAlumno == 1) {
        this.cant_estudiantes = this.cant_estudiantes + 1;
        this.suma_total = this.suma_total + this.listaInscripciones[i].precioFinal;
      } else if (this.listaInscripciones[i].categoriaAlumno == 2) {
        this.cant_egresados = this.cant_egresados + 1;
        this.suma_total = this.suma_total + this.listaInscripciones[i].precioFinal;
      } else if (this.listaInscripciones[i].categoriaAlumno == 3) {
        this.cant_particulares = this.cant_particulares + 1;
        this.suma_total = this.suma_total + this.listaInscripciones[i].precioFinal;
      } else
        console.log("opcion invalida");
    }
  }
};
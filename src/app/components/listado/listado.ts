import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionModel } from '../../models/inscripcion-model';
import { InscripcionService } from '../../services/inscripcion-service';
@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class ListadoComponent implements OnInit{

  listaInscripciones: InscripcionModel[] = [];
constructor(private inscripcionService: InscripcionService) { }

  ngOnInit(): void {
    
    this.listaInscripciones = this.inscripcionService.obtenerInscripcion();
  }


   
  get totalGeneral(): number {
    return this.listaInscripciones.reduce((acc, item) => acc + item.precio, 0);
  }

  contarPorCategoria(categoria: number): number {
    return this.listaInscripciones.filter(i => i.categoriaAlumno === categoria).length;
  }
}

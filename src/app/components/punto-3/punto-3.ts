import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-punto-3',
  imports: [CommonModule],
  templateUrl: './punto-3.html',
  styleUrl: './punto-3.css',
})
export class Punto3 implements OnInit{
  titulo: string = "Juego de la Memoria";
  cartas: any[] = [];
  cartasSeleccionadas: any[] = [];
  
  juegoIniciado: boolean = false;
  intentosDisponibles: number = 0;
  totalIntentos: number = 5; 
  bloqueado: boolean = false;
  puedoVoltear: boolean = false; 

  constructor(private cd: ChangeDetectorRef) {
    this.cargarCartas();
  }

  ngOnInit(): void { }

  cargarCartas(): void {
    this.cartas = [
      { id: 1, url: 'assets/imagen1.png', nombre: 'conejo', volteada: false },
      { id: 1, url: 'assets/imagen1.png', nombre: 'conejo', volteada: false },
      { id: 2, url: 'assets/imagen2.jpg', nombre: 'cerdo', volteada: false },
      { id: 2, url: 'assets/imagen2.jpg', nombre: 'cerdo', volteada: false },
      { id: 3, url: 'assets/imagen3.png', nombre: 'ciervo', volteada: false },
      { id: 3, url: 'assets/imagen3.png', nombre: 'ciervo', volteada: false },
      { id: 4, url: 'assets/imagen4.jpg', nombre: 'perro', volteada: false },
      { id: 4, url: 'assets/imagen4.jpg', nombre: 'perro', volteada: false },
      { id: 5, url: 'assets/imagen5.png', nombre: 'zorrillo', volteada: false },
      { id: 5, url: 'assets/imagen5.png', nombre: 'zorrillo', volteada: false },
      { id: 6, url: 'assets/imagen6.jpg', nombre: 'vaca', volteada: false },
      { id: 6, url: 'assets/imagen6.jpg', nombre: 'vaca', volteada: false },
    ];
  }

 iniciarJuego(): void {
  this.juegoIniciado = true;
  this.intentosDisponibles = this.totalIntentos;

  this.puedoVoltear = true; // 👈 FORZADO
  this.bloqueado = false;
  this.cartasSeleccionadas = [];

  this.cargarCartas();
  this.mezclarYResetear();
}

  reiniciarJuego(): void {
    this.juegoIniciado = false;
    this.puedoVoltear = false;
    this.bloqueado = false;
    this.intentosDisponibles = 0;
    this.cartasSeleccionadas = [];
    this.cargarCartas(); 
    this.mezclarYResetear();
  }

  mezclarYResetear(): void {
    this.cartas.forEach(c => c.volteada = false);

    for (let i = this.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
  }

  gestionarClick(carta: any): void {
    if (this.juegoIniciado && this.puedoVoltear && !this.bloqueado) {
      // Si la carta está tapada y no hay dos ya elegidas
      if (!carta.volteada && this.cartasSeleccionadas.length < 2) {
        
        carta.volteada = true;
        this.cartasSeleccionadas.push(carta);

        // Si ya elegí el par
        if (this.cartasSeleccionadas.length === 2) {
          this.puedoVoltear = false; // Bloqueamos el botón intentar hasta que termine
          this.compararPareja();
        }
      }
    }
  }

  compararPareja(): void {
  const [c1, c2] = this.cartasSeleccionadas;

  if (c1.id === c2.id) {
    this.cartasSeleccionadas = [];
    this.verificarVictoria();
    this.puedoVoltear = true;

  } else {
    this.bloqueado = true;
    setTimeout(() => {
      c1.volteada = false;
      c2.volteada = false;
      this.cartasSeleccionadas = [];
      this.intentosDisponibles--;
      this.bloqueado = false;
      this.cd.detectChanges();
      this.puedoVoltear = true;

      if (this.intentosDisponibles === 0) {
        alert("Perdiste. Se reinicia el tablero.");
         this.reiniciarJuego();
         this.cd.detectChanges();
      }
    },800);
  }
}

  verificarVictoria(): void {
    const todas = this.cartas.every(c => c.volteada);
    if (todas) {
      alert("¡Ganaste!");
      this.juegoIniciado = false;
    }
  }

 activarIntento(): void {
  this.puedoVoltear = true;
}

trackByCarta(index: number, carta: any): number {
  return index;
}

}




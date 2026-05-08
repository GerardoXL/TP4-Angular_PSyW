import { Component } from '@angular/core';

@Component({
  selector: 'app-punto-1',
  imports: [],
  templateUrl: './punto-1.html',
  styleUrl: './punto-1.css',
})

export class Punto1 {
  //arreglo de objetos para el slide
  eventos = [{
    nombre: 'Taller de Yoga',
    descripcion: 'Una sesión relajante para conectar con la naturaleza y mejorar tu flexibilidad.',
    img: 'https://imgs.search.brave.com/TLrHLnid-bcmsvuJinv83MfwvqslJYSysqEQoKYpTgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/Mjc4MzM1Mi9waG90/by91bmZvbGRlZC15/b2dhLW1hdHMtaW4t/YS1waWxhdGVzLXN0/dWRpby1pbGx1bWlu/YXRlZC1ieS1zdW5s/aWdodC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NGlDMEMx/ejk2emZkbVZYVU5r/MVBnT1VNLU41Tmpf/MF94YzI3UmpSNW9r/bz0'
  }
    , {
      nombre: 'taller de Carpinteria',
    descripcion: 'Clases de carpinteria, donde aprenderas a realizar adornos y muebles para tu casa.',
    img: 'https://imgs.search.brave.com/zfzN9q2um-opMCjRWu_c9LiawOpLJMOvfmqNi9oZCDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjkv/NTM5LzUyNi9zbWFs/bC9jbG9zZXVwLW9m/LWEtbWFuLXdvcmtp/bmctb24tYS13b29k/d29ya2luZy1wcm9q/ZWN0LWluLWhpcy1i/YWNreWFyZC1waG90/by5qcGc'
  },
  {
    nombre: 'Seminario de Angular Avanzado',
    descripcion: 'Aprende las mejores prácticas de arquitectura y optimización de rendimiento.',
    img: 'https://imgs.search.brave.com/TT8cYz-5OdqEyziwzP87TFGMHrhKvf3P38_k614ohiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3J1cG9jb2Rlc2ku/Y29tL2ltYWdlcy9j/dXJzby1hbmd1bGFy/Mi5wbmc'
  },
  {
    nombre: 'Torneo de Ajedrez Universitario',
    descripcion: 'Participa en el desafío intelectual más grande de la facultad. Premios para los finalistas.',
    img: 'https://imgs.search.brave.com/qx1HFSghmsrW3icLaHqEsSrF8n_770y4PbCnPRSkHqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hamVk/cmV6YmxhbmNveW5l/Z3JvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8xMi9S/ZWxvajItZTE0NTE1/NTU4NjU2NjYuanBn'
  },
  {
    nombre: 'Concierto de Rock Local',
    descripcion: 'Disfruta de las mejores bandas de la ciudad en una noche llena de energía.',
    img: 'https://imgs.search.brave.com/gSvqWzXwjD3B7d-0h6jDqRK6v8MnvnTknTIr7rZx-JU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/NTA1MDIyODI3NTUt/MDZlMWI3MGE0ZTFh/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UVjhmSEp2/WTJzbE1qQm1aWE4w/YVhaaGJIeGxibnd3/Zkh3d2ZIeDhNQT09'
  },
  ];
  indice = 0;

  // funcion para siguiente y anterior
  siguiente() {
    this.indice = this.indice + 1;
    if (this.indice == this.eventos.length) {
      this.indice = 0;
    }
  }
  anterior() {
    if (this.indice == 0) {
      this.indice = this.eventos.length - 1;
    } else
      this.indice = this.indice - 1;
  }
}

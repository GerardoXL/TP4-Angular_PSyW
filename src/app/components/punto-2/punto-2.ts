import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // importar commonModule para ngFor
//interfaz de objetos productos
interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}
@Component({
  selector: 'app-punto-2',
  imports: [CommonModule],
  templateUrl: './punto-2.html',
  styleUrl: './punto-2.css',
})
export class Punto2 {
  productos: Producto[] = [{
    nombre: 'Notebook Lenovo', descripcion: 'Laptop de 15 pulgadas con procesador i5 y 8GB de RAM', img: 'https://www.necxus.com.ar/products_image/35595/1000x1000_1.webp',
    precio: 850000
  },
  {
    nombre: 'Mouse Logitech', descripcion: 'Mouse inalámbrico ergonómico con sensor óptico', img: 'https://imgs.search.brave.com/jVvj6-7uCj_D5GeWJ6mYtq3eBt0dBM91L0V9VFSn_to/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXh4/LWltZy0yMDE5LnMz/LmFtYXpvbmF3cy5j/b20vNDk5MTdfMS5q/cGVn',
    precio: 15000,
  },
  {
    nombre: 'Teclado Redragon', descripcion: 'Teclado mecánico con retroiluminación RGB', img: 'https://imgs.search.brave.com/uEWpPQjdlDt5PdoWjvpoOz_4YyfHU4uANgqaM5Jg8RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXJk/LWRpZ2l0YWwuY29t/LmFyL3B1YmxpYy9m/aWxlcy9UZWNsYWRv/JTIwTWVjYW5pY28l/MjBSZWRyYWdvbiUy/MERyYWNvbmljJTIw/UHJvJTIwUmdiJTIw/TmVncm8lMjBTd2l0/Y2glMjBCcm93biUy/MEJsdWV0b290aC81/LmpwZw',
    precio: 45000
  },
  {
    nombre: 'Monitor Samsung', descripcion: 'Monitor LED de 24 pulgadas Full HD', img: 'https://imgs.search.brave.com/VIVZ4Sl3-jL5gdBxqSLaVRHE1xMz8CUkhpX4CtFkrw8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/MTgzMTAtTUxBOTk5/Mjc4NzY1MDNfMTEy/MDI1LU8ud2VicA',
    precio: 230000
  },
  {
    nombre: 'Auriculares con Cancelación de Ruido',
    descripcion: 'Sonido envolvente 7.1, micrófono desmontable y almohadillas de memoria.',
    img: 'https://imgs.search.brave.com/aZ-mSFRL9i3qo4LHYWgrb0Jx94H8p3CAAL2oiqC9L3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzc0NjgwNC1NTEE5/NTU2MjM0MDA1NV8x/MDIwMjUtVi53ZWJw',
    precio: 120000
  },
  {
    nombre: 'Webcam 4K Ultra HD',
    descripcion: 'Autoenfoque inteligente, micrófono dual y corrección de luz automática.',
    img: 'https://imgs.search.brave.com/bS7zQ82Uf_bZ4M5xrhzM1SeXuIuKavv2pDVJSKAERZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/NzkzMTQtTUxBODcx/MjM1MjI1MzZfMDcy/MDI1LU8ud2VicA',
    precio: 95000
  },
  {
    nombre: 'Silla Ergonómica Oficina',
    descripcion: 'Soporte lumbar ajustable, reclinable y base reforzada.',
    img: 'https://imgs.search.brave.com/lkNTk84Vee4WzY7gFM9hB_0Ugfw6s4JgWKk-oLWbyMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgzODg5NS1NTEE4/MTA5MTA0NTU2Nl8x/MjIwMjQtRS53ZWJw',
    precio: 350000
  },
  ];
  carrito: Producto[] = [];
  agregarAlCarrito(prod: Producto) {
    this.carrito.push(prod);
    console.log("productos en el carrito: ", this.carrito)
  }
  calcularTotal() {
    let total: number = 0;
    let i: number;
    for (i = 0; i < this.carrito.length; i++) {
      total = total + this.carrito[i].precio;
    }
    return total;
  }
  vaciarCarrito(){
    this.carrito=[]
  }
}

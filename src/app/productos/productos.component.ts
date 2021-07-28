import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos : Producto[];
  private productoService: ProductoService;

  constructor(ps: ProductoService,
  private router: Router) {
    this.productoService = ps;
  }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  delete(producto: Producto): void{

      Swal({
      title: '¿Estas seguro?',
      type: 'warning',
      text: `¿Seguro que desea eliminar el producto ${producto.nombre}?`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar!',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.productoService.eliminar(producto.id).subscribe(
          response => console.log("Eliminado con exito")
        )
        this.productos = this.productos.filter(pro => pro !== producto) //-------/
        Swal(                                                           //-------/
          'Producto eliminado!',                                        //-------/ } esto quedo fuera del subscribe por que no queria dar ahi.
          `Producto ${producto.nombre} eliminado con exito.`,           //-------/
          'success')                                                    //-------/
          }
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos/producto.service';
import { Producto } from '../productos/producto';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productosform',
  templateUrl: './productosform.component.html',
  styleUrls: ['./productosform.component.css']
})
export class ProductosformComponent implements OnInit {

  public title:string = "Crear Producto";
  public producto : Producto = new Producto();

  constructor(private productoService: ProductoService,
  private router: Router,
  private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarProducto();
  }

  create(): void{
    this.productoService.crearProductos(this.producto).subscribe(
      response => {
        this.router.navigate(['/productos'])
        Swal('Nuevo Producto', `Producto creado con exito`, 'success')
      }
    )
  }

  update(): void{
    this.productoService.actualizar(this.producto)
    .subscribe(producto => {
      this.router.navigate(['/productos'])
      Swal('Producto Actualizado', `Producto actualizado con exito`, 'success')
    })
  }

  public cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productoService.getCliente(id).subscribe( (producto) => this.producto = producto)
      }
    })

  }

}

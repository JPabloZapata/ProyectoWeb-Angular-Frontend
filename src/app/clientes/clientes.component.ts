import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  private clienteService: ClienteService;

  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService;
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      //function(clientes){
      //  this.clientes = clientes
      //}
      clientes => this.clientes = clientes
    );
  }

  delete(cliente:Cliente): void{
    //this.clienteService.delete(cliente.id).subscribe(
    //response => {
     //this.clientes = this.clientes.filter(cli => cli !== cliente)
    //  })
      Swal({
        title: '¿Estas seguro?',
        type: 'warning',
        text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
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
          this.clienteService.delete(cliente.id).subscribe(
            response => {
              this.clientes = this.clientes.filter(cli => cli !== cliente)
              Swal(
                'Cliente eliminado!',
                `Cliente ${cliente.nombre} eliminado con exito.`,
                'success')
            })
          }
        })
  }

}

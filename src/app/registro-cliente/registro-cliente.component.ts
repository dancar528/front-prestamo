import { Component, OnInit, ViewChild } from '@angular/core';
import { PrestamoService } from '../prestamo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  clientes: any[] = [];

  identificacion: number = 0;
  nombre: string = '';
  apellido: string = '';
  fh_nacimiento: string = '';

  @ViewChild('commentForm') commentForm: NgForm;

  constructor(private prestamoService: PrestamoService) { }

  ngOnInit() {

    this.prestamoService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes.recordset
      });

  }

  onSubmit(commentForm: NgForm){

    let cliente = {
      nombre: this.nombre,
      apellido: this.apellido,
      identificacion: this.identificacion,
      fh_nacimiento: this.fh_nacimiento,
    };

    this.clientes.push(cliente);
    this.prestamoService.addCliente(cliente)
      .subscribe();
  }

}

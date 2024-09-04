import { Pedido } from './../../models/pedido';
import { PedidoService } from './../../services/pedido.service';
import { Component } from '@angular/core';
import { CardModule, FormModule, RowComponent, TableModule } from '@coreui/angular';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CardModule, RowComponent, TableModule, FormModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrl: './listar-pedidos.component.scss'
})
export class ListarPedidosComponent {

  public pedidos: Pedido[] = [];


  constructor(private pedidoService: PedidoService) { 
    this.pedidoService.listar().subscribe({
      next: (next) => {
        this.pedidos = next;
      }
    })


  }



}

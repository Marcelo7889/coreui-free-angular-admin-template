import { Component } from '@angular/core';
import { CardModule, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-relacionar-pedidos',
  standalone: true,
  imports: [CardModule, RowComponent],
  templateUrl: './relacionar-pedidos.component.html',
  styleUrl: './relacionar-pedidos.component.scss'
})
export class RelacionarPedidosComponent {

}

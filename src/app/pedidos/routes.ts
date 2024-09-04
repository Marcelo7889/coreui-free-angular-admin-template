import { ImportarPedidosComponent } from './importar-pedidos/importar-pedidos.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'listar',
    loadComponent: () =>
      import('./listar-pedidos/listar-pedidos.component').then(
        (m) => m.ListarPedidosComponent
      ),
    data: {
      title: $localize`Listar Pedidos`,
    },
  },
  {
    path: 'relacionar',
    loadComponent: () =>
      import('./relacionar-pedidos/relacionar-pedidos.component').then(
        (m) => m.RelacionarPedidosComponent
      ),
    data: {
      title: $localize`Relacionar Pedidos`,
    },
  },

  {
    path: 'importar',
    loadComponent: () =>
      import('./importar-pedidos/importar-pedidos.component').then(
        (m) => m.ImportarPedidosComponent
      ),
    data: {
      title: $localize`Importar Pedidos`,
    },
  },
];

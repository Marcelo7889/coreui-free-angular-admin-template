import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cadastrar',
    loadComponent: () => import('./cadastrar/cadastrar.component').then(m => m.CadastrarComponent),
    data: {
      title: $localize`Cadastro de Embarcadores`
    }
  },

];


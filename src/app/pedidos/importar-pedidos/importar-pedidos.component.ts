import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AlertModule,
  ButtonModule,
  CardModule,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormModule,
  RowComponent,
  TableModule,
  TextColorDirective,
} from '@coreui/angular';
import { Embarcador } from 'src/app/models/Embarcador';

@Component({
  selector: 'app-importar-pedidos',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    RowComponent,
    FormModule,
    ReactiveFormsModule,
    AlertModule,
    ColComponent,
    ButtonModule,
    FormDirective,
    TextColorDirective,
    FormLabelDirective,
    FormControlDirective,
  ],
  templateUrl: './importar-pedidos.component.html',
  styleUrl: './importar-pedidos.component.scss',
})
export class ImportarPedidosComponent {
  public embarcadores: Embarcador[] = [];
  public alerta = false;
  public mensagem = '';
  public cor = 'success';

  public formulario = new FormGroup({
    nome: new FormControl(''),
    cnpj: new FormControl(''),
    apiKey: new FormControl(''),
    urlApi: new FormControl(''),
  });
}

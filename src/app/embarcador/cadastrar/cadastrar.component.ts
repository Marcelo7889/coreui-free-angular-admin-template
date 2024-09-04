import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  AlertModule,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  FormModule,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  ModalModule,
  RowComponent,
  TableModule,
  TextColorDirective,
} from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { Embarcador } from 'src/app/models/Embarcador';
import { EmbarcadorService } from 'src/app/services/embarcador.service';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonDirective,
    ListGroupDirective,
    ListGroupItemDirective,
    TableModule,
    ModalModule,
    AlertModule,
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss',
})
export class CadastrarComponent implements OnInit {
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

  constructor(private embarcadorService: EmbarcadorService) {}

  ngOnInit(): void {
    this.listarEmbarcadores();
  }

  listarEmbarcadores() {
    this.embarcadorService.listar().subscribe({
      next: (next) => {
        this.embarcadores = next;
      },
    });
  }

  cadastrarEmbarcador(){
    console.log(this.formulario.value);

    this.embarcadorService.cadastrar(this.formulario.value).subscribe({
      next: (next) => {
        this.listarEmbarcadores();
        this.alerta = true;
        this.mensagem = 'Cadastrado com sucesso!';
        this.cor = 'success';
      },
      error: (error) => {
        this.alerta = true;
        this.mensagem = error.error.mensagem;
        this.cor = 'danger';
      },
    });
  }






}

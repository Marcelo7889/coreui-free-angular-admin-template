import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarPedidosComponent } from './importar-pedidos.component';

describe('ImportarPedidosComponent', () => {
  let component: ImportarPedidosComponent;
  let fixture: ComponentFixture<ImportarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportarPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

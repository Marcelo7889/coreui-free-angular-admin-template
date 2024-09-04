import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarPedidosComponent } from './relacionar-pedidos.component';

describe('RelacionarPedidosComponent', () => {
  let component: RelacionarPedidosComponent;
  let fixture: ComponentFixture<RelacionarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionarPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

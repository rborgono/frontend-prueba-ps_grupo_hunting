import { Component, Input } from '@angular/core';
import { Venta } from '../../models/venta.model';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html'
})
export class ListaVentasComponent {

  @Input() ventas: Venta[] = [];
}

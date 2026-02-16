import { Component } from '@angular/core';
import { Venta } from './models/venta.model';
import { TotalRegion } from './models/total-region.model';
import { VentasService } from './services/ventas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  ventas: Venta[] = [];
  totales: TotalRegion[] = [];

  from: string | null = null;
  to: string | null = null;

  constructor(private ventasService: VentasService) {}

  onFilterChange(fechas: { from: string | null; to: string | null }): void {
    this.from = fechas.from;
    this.to = fechas.to;

    this.cargarDatos();
  }

  cargarDatos(): void {
    this.ventasService.listarVentas(this.from ?? undefined, this.to ?? undefined)
      .subscribe(data => this.ventas = data);

    this.ventasService.totalVentasPorRegion(this.from ?? undefined, this.to ?? undefined)
      .subscribe(data => this.totales = data);
  }

  ngOnInit(): void {
    this.cargarDatos();
  }
}

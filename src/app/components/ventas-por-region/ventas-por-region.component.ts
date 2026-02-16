import { Component, Input } from '@angular/core';
import { TotalRegion } from '../../models/total-region.model';

@Component({
  selector: 'app-ventas-por-region',
  templateUrl: './ventas-por-region.component.html'
})
export class VentasPorRegionComponent {

  @Input() totales: TotalRegion[] = [];
}

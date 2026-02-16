import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';
import { TotalRegion } from '../models/total-region.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private baseUrl = `${environment.apiUrl}/ventas`;

  constructor(private http: HttpClient) { }

  listarVentas(from?: string, to?: string): Observable<Venta[]> {
    let params = new HttpParams();

    if (from) {
      params = params.set('from', from);
    }
    if (to) {
      params = params.set('to', to);
    }

    return this.http.get<Venta[]>(`${this.baseUrl}/listarVentas`, { params });
  }

  totalVentasPorRegion(from?: string, to?: string): Observable<TotalRegion[]> {
    let params = new HttpParams();

    if (from) {
      params = params.set('from', from);
    }
    if (to) {
      params = params.set('to', to);
    }

    return this.http.get<TotalRegion[]>(`${this.baseUrl}/totalVentasPorRegion`, { params });
  }
}

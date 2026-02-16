import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeCL from '@angular/common/locales/es-CL';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListaVentasComponent } from './components/lista-ventas/lista-ventas.component';
import { VentasPorRegionComponent } from './components/ventas-por-region/ventas-por-region.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeCL);

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ListaVentasComponent,
    VentasPorRegionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleSeriesPage } from './detalle-series';

@NgModule({
  declarations: [
    DetalleSeriesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleSeriesPage),
  ],
})
export class DetalleSeriesPageModule {}

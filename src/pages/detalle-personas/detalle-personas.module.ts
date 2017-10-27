import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePersonasPage } from './detalle-personas';

@NgModule({
  declarations: [
    DetallePersonasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePersonasPage),
  ],
})
export class DetallePersonasPageModule {}

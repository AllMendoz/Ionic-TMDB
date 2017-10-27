import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaInicialPage } from './busqueda-inicial';
import { busquedaInicialProvider } from '../../providers/busqueda-inicialProvider/busqueda-inicialProvider';
import {  HttpModule } from '@angular/http';
import { APP_CONFIG, APP_DI_CONFIG } from '../../providers/config/config';

@NgModule({
  declarations: [
    BusquedaInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaInicialPage),
    HttpModule
  ],
  entryComponents: [
    BusquedaInicialPage
  ],
  providers: [
  { provide: APP_CONFIG, useValue: APP_DI_CONFIG},
   busquedaInicialProvider
  ]
})
export class BusquedaInicialPageModule {}
